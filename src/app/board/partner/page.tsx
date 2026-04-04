'use client';

import { useState, useEffect, useCallback } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  dance_type: string;
  area: string;
  role: string;
  level: string;
  nickname: string;
  created_at: string;
}

const DANCE_TYPES = ['サルサ', 'バチャータ', 'キゾンバ', 'メレンゲ', 'レゲトン', 'ズーク', 'その他'];
const AREAS = ['東京', '大阪', '名古屋', '福岡', '札幌', '仙台', '横浜', '京都', '神戸', 'その他'];
const ROLES = ['リーダー', 'フォロワー', 'どちらでも'];
const LEVELS = ['初心者', '初中級', '中級', '中上級', '上級'];

export default function PartnerBoardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');

  // Form fields
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [danceType, setDanceType] = useState('');
  const [area, setArea] = useState('');
  const [role, setRole] = useState('');
  const [level, setLevel] = useState('');
  const [formDeletePassword, setFormDeletePassword] = useState('');

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      if (data.posts) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname || !title || !content || !danceType || !area || !role || !formDeletePassword) {
      alert('すべての必須項目を入力してください');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname,
          title,
          content,
          danceType,
          area,
          role,
          level: level || '初心者',
          deletePassword: formDeletePassword,
        }),
      });

      if (res.ok) {
        setShowForm(false);
        setNickname('');
        setTitle('');
        setContent('');
        setDanceType('');
        setArea('');
        setRole('');
        setLevel('');
        setFormDeletePassword('');
        fetchPosts();
      } else {
        const err = await res.json();
        alert(err.error || '投稿に失敗しました');
      }
    } catch (error) {
      console.error('Post creation failed:', error);
      alert('投稿に失敗しました');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (postId: string) => {
    if (!deletePassword) {
      setDeleteError('削除パスワードを入力してください');
      return;
    }

    try {
      const res = await fetch('/api/posts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, deletePassword }),
      });

      if (res.ok) {
        setDeleteTarget(null);
        setDeletePassword('');
        setDeleteError('');
        fetchPosts();
      } else {
        const err = await res.json();
        setDeleteError(err.error === 'Incorrect delete password' ? 'パスワードが違います' : '削除に失敗しました');
      }
    } catch (error) {
      console.error('Delete failed:', error);
      setDeleteError('削除に失敗しました');
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">お相手募集掲示板</h1>
            <p className="text-gray-600 mt-1">ダンスパートナーを見つけよう</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {showForm ? '閉じる' : '新規投稿'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-lg font-bold mb-4">新規投稿</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ニックネーム *</label>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2" placeholder="表示名を入力" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">削除パスワード *</label>
                <input type="password" value={formDeletePassword} onChange={(e) => setFormDeletePassword(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2" placeholder="投稿を削除する時に使います" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">タイトル *</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2" placeholder="募集タイトル" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">内容 *</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 h-24" placeholder="詳細を記入してください" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ジャンル *</label>
                <select value={danceType} onChange={(e) => setDanceType(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2" required>
                  <option value="">選択してください</option>
                  {DANCE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">エリア *</label>
                <select value={area} onChange={(e) => setArea(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2" required>
                  <option value="">選択してください</option>
                  {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ロール *</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2" required>
                  <option value="">選択してください</option>
                  {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">レベル</label>
                <select value={level} onChange={(e) => setLevel(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2">
                  <option value="">選択してください</option>
                  {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" disabled={submitting}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 transition-colors">
              {submitting ? '投稿中...' : '投稿する'}
            </button>
          </form>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-500">読み込み中...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">まだ投稿がありません</div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full">{post.dance_type}</span>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{post.area}</span>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{post.role}</span>
                      {post.level && <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">{post.level}</span>}
                    </div>
                    <p className="text-gray-700 mt-3 whitespace-pre-wrap">{post.content}</p>
                    <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
                      <span>{post.nickname}</span>
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => { setDeleteTarget(post.id); setDeletePassword(''); setDeleteError(''); }}
                    className="text-gray-400 hover:text-red-500 ml-4 text-sm transition-colors"
                    title="削除"
                  >
                    削除
                  </button>
                </div>

                {deleteTarget === post.id && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700 mb-2">削除パスワードを入力してください</p>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={deletePassword}
                        onChange={(e) => { setDeletePassword(e.target.value); setDeleteError(''); }}
                        className="flex-1 border rounded-lg px-3 py-1 text-sm"
                        placeholder="削除パスワード"
                      />
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition-colors"
                      >
                        削除
                      </button>
                      <button
                        onClick={() => setDeleteTarget(null)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-1 rounded-lg text-sm transition-colors"
                      >
                        キャンセル
                      </button>
                    </div>
                    {deleteError && <p className="text-red-600 text-sm mt-2">{deleteError}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
