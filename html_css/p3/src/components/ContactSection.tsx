import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;

    // Compose mailto URI
    const mailtoUrl = `mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
      `[포트폴리오 문의] ${subject || name}`
    )}&body=${encodeURIComponent(
      `보낸 사람: ${name} (${senderEmail})\n\n내용:\n${message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
                Get in Touch & Coffee Chat
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                함께 더 나은 웹을 만들 기회를 기다립니다
              </h2>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                새로운 포지션 제안, 프로젝트 협업, 프론트엔드 기술 이야기 등 가벼운 커피챗도 언제나 환영합니다.
                편하신 방법으로 연락해 주세요.
              </p>
            </div>

            {/* Email Card with Quick Copy */}
            <div className="p-5 rounded-2xl bg-[#0e1119] border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-white/40 block">직접 이메일 보내기</span>
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="text-sm sm:text-base font-mono font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  {DEVELOPER_INFO.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white/80 transition-colors"
                title="이메일 복사"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 font-mono flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>평균 24시간 이내에 신속하게 회신드립니다.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0e1119] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">
              메시지 보내기 (Quick Contact)
            </h3>
            <p className="text-xs text-white/50 mb-6 font-mono">
              작성하신 내용은 기본 메일 클라이언트로 전달됩니다.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-blue-950/20 border border-blue-500/20 text-center space-y-3">
                <Check className="w-8 h-8 text-blue-400 mx-auto" />
                <h4 className="text-base font-bold text-white">메일 클라이언트가 실행되었습니다</h4>
                <p className="text-xs text-white/70">
                  메일 앱에서 전송 버튼을 누르시면 김민성 개발자에게 직접 전송됩니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-white/60 block mb-1.5">
                      성함 / 소속 (Name / Company) *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="홍길동 / 테크 기업"
                      className="w-full px-3.5 py-2.5 text-xs bg-white/[0.04] border border-white/[0.1] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-white/60 block mb-1.5">
                      회신받으실 이메일 (Your Email) *
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white/[0.04] border border-white/[0.1] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/60 block mb-1.5">
                    제목 (Subject)
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="채용 제안 / 협업 문의 / 커피챗 요청"
                    className="w-full px-3.5 py-2.5 text-xs bg-white/[0.04] border border-white/[0.1] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-white/60 block mb-1.5">
                    메시지 내용 (Message) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="프로젝트 내용이나 나누고 싶은 이야기를 편하게 작성해 주세요."
                    className="w-full px-3.5 py-2.5 text-xs bg-white/[0.04] border border-white/[0.1] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/25 transition-all active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>이메일 전송하기 (Send Message)</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
