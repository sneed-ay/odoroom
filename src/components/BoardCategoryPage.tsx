"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Thread {
  id: string;
  category: string;
  title: string;
  author: string;
  createdAt: string;
  content?: string;
  replies?: number;
}

interface BoardCategoryPageProps {
  category: string;
  categoryLabel: string;
}

export default function BoardCategoryPage({ category, categoryLabel }: BoardCategoryPageProps) {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  const [formContent, setFormContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const loadThreads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/board/threads?category=${category}`);
      if (res.ok) {
        const data = await res.json();
        setThreads(data);
      }
    } catch (e) {
      console.error("Failed to load threads:", e);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    loadThreads();
  }, [loadThreads]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/board/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          title: formTitle.trim(),
          author: formAuthor.trim() || "名無しさん",
          content: formContent.trim(),
        }),
      });
      if (res.ok) {
        setFormTitle("");
        setFormAuthor("");
        setFormContent("");
        setShowForm(false);
        loadThreads();
      }
    } catch (e) {
      console.error("Failed to create thread:", e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/board" className="text-violet-600 hover:text-violet-700 text-sm mb-4 inline-flex items-center gap-1">
            ← 掲示板トップに戻る
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">{categoryLabel}</h1>
          <p className="text-gray-600 mt-1">自由に投稿できます</p>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-violet-600 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-violet-700 hover:to-pink-600 transition-all font-medium shadow-sm"
          >
            {showForm ? "キャンセル" : "新規スレッド作成"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">タイトル</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="スレッドのタイトル"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">名前</label>
                <input
                  type="text"
                  value={formAuthor}
                  onChange={(e) => setFormAuthor(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="名無しさん"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">内容</label>
                <textarea
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 min-h-[120px]"
                  placeholder="スレッドの内容を入力"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 disabled:opacity-50 font-medium"
              >
                {submitting ? "投稿中..." : "投稿する"}
              </button>
            </div>
          </form>
        )}
        {loading ? (
          <div className="text-center py-12 text-gray-500">読み込み中...</div>
        ) : threads.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">💬</div>
            <p className="text-gray-500 text-lg">まだスレッドがありません</p>
            <p className="text-gray-400 text-sm mt-1">最初のスレッドを立ててみましょう</p>
          </div>
        ) : (
          <div className="space-y-3">
            {threads.map((thread) => (
              <Link
                key={thread.id}
                href={`/board/${thread.id}`}
                className="block bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{thread.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <span>{thread.author}</span>
                      <span>{new Date(thread.createdAt).toLocaleDateString("ja-JP")}</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
