import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setLoading(true);

    // Simulate sending network request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#090b12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & social */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {language === 'ko' ? '새로운 기회와 협업을 제안해주세요' : "Let's Build Together"}
              </h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {language === 'ko'
                  ? '프론트엔드 포지션 채용, 프로덕트 아키텍처 컨설팅, 가벼운 커피챗 모두 편하게 연락해 주세요. 24시간 내에 회신드립니다.'
                  : 'Interested in working together or exploring high-impact frontend roles? Drop a message and I will reply within 24 hours.'}
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
              <div className="text-xs text-slate-400">Direct Contact</div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-white select-all">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                {PERSONAL_INFO.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="text-xs text-slate-400">Links & Channels</div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Tech Blog</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#0c0e17] border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">
              {language === 'ko' ? '메시지 남기기' : 'Send a Message'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {language === 'ko'
                ? '입력하신 내용은 즉시 발송 대기열로 전달됩니다.'
                : 'Fill out the form below to initiate contact.'}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">
                  {language === 'ko' ? '메시지가 성공적으로 전달되었습니다!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-xs text-slate-300">
                  {language === 'ko'
                    ? '보내주신 내용 확인 후 기재해주신 이메일로 빠르게 회신드리겠습니다.'
                    : 'Thank you for reaching out. I will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      {language === 'ko' ? '성함 / 담당자명 *' : 'Name / Contact *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'ko' ? '홍길동' : 'John Doe'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      {language === 'ko' ? '회신받을 이메일 *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    {language === 'ko' ? '연락 목적 / 제목' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'ko' ? '프론트엔드 포지션 채용 문의 / 프로젝트 협업' : 'Role Inquiry / Collaboration'}
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    {language === 'ko' ? '메시지 내용 *' : 'Message *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={language === 'ko' ? '프로젝트 내용, 일정, 원하시는 협업 방식 등을 자유롭게 적어주세요.' : 'Share project details, timelines, or role overview.'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-cyan-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {loading
                      ? (language === 'ko' ? '전송 중...' : 'Sending...')
                      : (language === 'ko' ? '메시지 전송하기' : 'Send Message')}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
