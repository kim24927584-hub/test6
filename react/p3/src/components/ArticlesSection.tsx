import React, { useState } from 'react';
import { Article, ARTICLES } from '../data/portfolioData';
import { BookOpen, ArrowUpRight, X } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
              Engineering Notes & Reflections
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              기술 아티클 및 지식 공유
            </h2>
            <p className="text-sm text-white/60 mt-2 max-w-xl">
              실무에서 겪은 성능 문제, 아키텍처 고민, 브라우저 렌더링 파이프라인의 원리를 정리한 기술 글입니다.
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#11141c] hover:bg-[#141824] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Clean Unboxed Metadata (Zero-pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-white/50 font-mono mb-3">
                  <span className="text-blue-400 font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-white/60 line-clamp-3 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Tags (Unboxed text with slash separator) & Read action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-white/40 truncate max-w-[180px]">
                  {article.tags.join(' / ')}
                </span>
                <span className="text-blue-400 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  읽기 <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={() => setSelectedArticle(null)} />
          <div className="relative w-full max-w-2xl bg-[#0e1118] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col">
            
            {/* Header */}
            <div className="sticky top-0 bg-[#0e1118]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                <span className="text-blue-400">{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.08]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {selectedArticle.title}
              </h2>

              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs sm:text-sm text-blue-200/90 leading-relaxed font-mono">
                요약: {selectedArticle.summary}
              </div>

              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                {selectedArticle.content.map((para, idx) => (
                  <p key={idx} className="indent-0">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center gap-2 flex-wrap text-xs font-mono text-white/50">
                <span className="text-white/30">키워드:</span>
                {selectedArticle.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-white/[0.04] rounded text-white/70">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-[#0e1118] border-t border-white/[0.08] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] rounded-lg transition-colors"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
