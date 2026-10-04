/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Lock, 
  AlertTriangle, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  XCircle,
  Play,
  Pause,
  ChevronDown
} from 'lucide-react';

const scamStory = [
  {
    title: "শুরুটা হয় একটি 'রং নাম্বার' দিয়ে",
    content: "একটি সাধারণ 'রং নাম্বার' টেক্সট মেসেজ... কীভাবে একজন বুদ্ধিমান মানুষের সারা জীবনের জমানো তিন লাখ ডলার, নিমেষেই শেষ করে দিতে পারে? সবকিছু শুরু হয় হোয়াটসঅ্যাপ বা টেলিগ্রামে আসা একটি র্যান্ডম মেসেজ দিয়ে। আপনি হয়তো ভদ্রতা করে রিপ্লাই দেবেন... 'সরি, রং নাম্বার।'",
    icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
    fullText: "একটি সাধারণ 'রং নাম্বার' টেক্সট মেসেজ... কীভাবে একজন বুদ্ধিমান মানুষের সারা জীবনের জমানো তিন লাখ ডলার, নিমেষেই শেষ করে দিতে পারে? আজ আমরা সাইবার ক্রাইম ইতিহাসের সবচেয়ে ভয়ংকর একটি স্ক্যাম নিয়ে কথা বলবো। যাকে বলা হয়... 'পিগ বুচারিং' স্ক্যাম। সবকিছু শুরু হয়... হোয়াটসঅ্যাপ বা টেলিগ্রামে আসা একটি র্যান্ডম মেসেজ দিয়ে। আপনি হয়তো ভদ্রতা করে রিপ্লাই দেবেন... 'সরি, রং নাম্বার।'"
  },
  {
    title: "বন্ধুত্ব ও বিশ্বাস অর্জন (Grooming)",
    content: "ব্যাস... ফাঁদ পাতা শুরু! স্ক্যামার তখন রিপ্লাই করবে... 'ওহ! আই অ্যাম সরি। ইউ সিম লাইক আ নাইস পার্সন।' তারা নিজেদের সফল বিজনেসম্যান হিসেবে পরিচয় দেবে এবং মাসের পর মাস ধরে আপনার ইমোশনাল উইকনেসগুলো বুঝে নেবে। এই স্ক্যামের নাম 'পিগ বুচারিং' রাখা হয়েছে কারণ তারা ভিকটিমকে 'মোটা-তাজা' করে জবাই করার আগে।",
    icon: <Users className="w-12 h-12 text-purple-500" />,
    fullText: "ব্যাস... ফাঁদ পাতা শুরু! স্ক্যামার তখন রিপ্লাই করবে... 'ওহ! আই অ্যাম সরি। ইউ সিম লাইক আ নাইস পার্সন। হোয়্যার আর ইউ ফ্রম?' এভাবেই তারা আপনার সাথে বন্ধুত্বের সম্পর্ক গড়ে তুলবে। তারা হয়তো বলবে... তারা সিঙ্গাপুর বা দুবাইয়ের একজন সফল বিজনেসম্যান। দিনের পর দিন কথা বলে, তারা খুব সহজেই আপনার ইমোショナル উইকনেসগুলো বুঝে নেবে। এই স্ক্যামের নাম 'পিগ বুচারিং' রাখা হয়েছে... কারণ এখানে স্ক্যামাররা ভিকটিমকে একবারে সর্বস্বান্ত করে না। জবাই করার আগে... তারা মাসের পর মাস ধরে, একটু একটু করে বিশ্বাস অর্জন করে... ভিকটিমকে 'মোটা-তাজা' করে।"
  },
  {
    title: "ফেইক ইনভেস্টমেন্ট ও টোপ",
    content: "কথায় কথায় তারা ক্রিপ্টো ট্রেডিং বা ইনভেস্টমেন্টের কথা তুলবে। তারা আপনাকে একটি ফেইক ক্রিপ্টো এক্সচেঞ্জ ওয়েবসাইটের লিংক দেবে যা দেখতে একদম আসল। শুরুতে তারা মাত্র একশ বা দুইশ ডলার ইনভেস্ট করতে বলবে এবং আপনি দেখবেন আপনার ব্যালেন্স বাড়ছে। এমনকি আপনি সেই টাকা উইথড্র-ও করতে পারবেন!",
    icon: <TrendingUp className="w-12 h-12 text-green-500" />,
    fullText: "কয়েক সপ্তাহ পর... কথায় কথায় তারা ক্রিপ্টো ট্রেডিং বা ইনভেস্টমেন্টের কথা তুলবে। তারা আপনাকে একটি ফেইক ক্রিপ্টো এক্সচেঞ্জ ওয়েবসাইটের লিংক দেবে... যা দেখতে একদম আসল এবং প্রফেশনাল ওয়েবসাইটের মতোই। শুরুতে... তারা আপনাকে মাত্র একশ বা দুইশ ডলার ইনভেস্ট করতে বলবে। আপনি দেখবেন... তাদের সিগন্যাল ফলো করে কয়েকদিনের মধ্যেই আপনার ব্যালেন্স তিনশ ডলারে পরিণত হয়েছে। চমকপ্রদ ব্যাপার হলো... আপনি সেই টাকা নিজের ব্যাংক অ্যাকাউন্টে উইথড্র-ও করতে পারবেন!"
  },
  {
    title: "বিশাল ইনভেস্টমেন্ট ও ট্র্যাপ",
    content: "এই 'সাকসেসফুল উইথড্রয়াল' হচ্ছে তাদের সবচেয়ে বড় সাইকোলজিক্যাল ট্রিক। এর ফলে আপনার বিশ্বাস পাকাপোক্ত হয়ে যায়। এরপর স্ক্যামার আপনাকে আপনার জীবনের সমস্ত সেভিংস ইনভেস্ট করতে প্ররোচিত করবে। আপনি যখন বিশাল অংকের টাকা ডিপোজিট করবেন, ড্যাশবোর্ডে দেখবেন আপনার প্রফিট আকাশ ছুঁয়েছে।",
    icon: <Lock className="w-12 h-12 text-amber-500" />,
    fullText: "আর এই 'সাকসেসফুল উইথড্রয়াল' হচ্ছে তাদের সবচেয়ে বড় সাইকোলজিক্যাল ট্রিক। এর ফলে... ওই স্ক্যামার, এবং ওই প্ল্যাটফর্মের ওপর, আপনার বিশ্বাস হান্ড্রেড পার্সেন্ট পাকাপোক্ত হয়ে যায়। বিশ্বাস অর্জনের পর... স্ক্যামার আপনাকে বড় অংকের টাকা, হয়তো আপনার জীবনের সমস্ত সেভিংস ইনভেস্ট করতে প্ররোচিত করবে। আপনি যখন ৫০ হাজার বা এক লাখ ডলার ডিপোজিট করবেন... ড্যাশবোর্ডে দেখবেন আপনার প্রফিট আকাশ ছুঁয়েছে।"
  },
  {
    title: "টাকা উইথড্র ও শেষ ধাক্কা",
    content: "যখনই আপনি সেই টাকা উইথড্র করতে যাবেন, প্ল্যাটফর্ম থেকে বলা হবে আপনার অ্যাকাউন্ট ফ্রিজ করা হয়েছে। টাকা তোলার জন্য আপনাকে বিশ পার্সেন্ট 'ট্যাক্স' বা 'রিলিজ ফি' দিতে হবে। আপনি সেই টাকাও দিয়ে দেবেন। এরপর ওয়েবসাইটটি অফলাইন হয়ে যাবে এবং আপনার সেই অনলাইন বন্ধুও আপনাকে ব্লক করে দেবে।",
    icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
    fullText: "কিন্তু... যখনই আপনি সেই টাকা উইথড্র করতে যাবেন, ঠিক তখনই শুরু হবে আসল খেলা। প্ল্যাটফর্ম থেকে বলা হবে... আপনার অ্যাকাউন্ট ফ্রিজ করা হয়েছে, এবং টাকা তোলার জন্য আপনাকে বিশ পার্সেন্ট 'ট্যাক্স' বা 'রিলিজ ফি' দিতে হবে। আপনি ঘোরের মধ্যে সেই ট্যাক্সের টাকাও দিয়ে দেবেন। এরপর? ওয়েবসাইটটি অফলাইন হয়ে যাবে। এবং আপনার সেই অনলাইন বন্ধুও আপনাকে ব্লক করে দেবে। আপনার সমস্ত টাকা... চিরতরে গায়েব।"
  }
];

const safetyTips = [
  { text: "হোয়াটসঅ্যাপ বা টেলিগ্রামে অচেনা নাম্বার থেকে আসা কোনো মেসেজে রিপ্লাই দেবেন না।", icon: <XCircle className="w-5 h-5 text-red-500" /> },
  { text: "গ্যারান্টিড হাই-রিটার্ন বা সিক্রেট ক্রিপ্টো ইনভেস্টমেন্টের কথা বললে সতর্ক হোন।", icon: <AlertTriangle className="w-5 h-5 text-amber-500" /> },
  { text: "সবসময় বাইন্যান্স বা কয়েনবেইজ-এর মতো ভেরিফাইড প্ল্যাটফর্ম ব্যবহার করুন।", icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
  { text: "কারো পাঠানো লিংকে ক্লিক করে কোনো থার্ড-পার্টি অ্যাপ ইন্সটল করবেন না।", icon: <XCircle className="w-5 h-5 text-red-500" /> }
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTTS = async () => {
    if (isPlaying) {
      currentAudio?.pause();
      setIsPlaying(false);
      return;
    }

    if (currentAudio) {
      currentAudio.play();
      setIsPlaying(true);
      return;
    }

    setLoading(true);
    try {
      const fullScript = scamStory.map(s => s.fullText).join(" ");
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: fullScript })
      });

      const data = await response.json();
      if (data.audio) {
        const audio = new Audio(`data:audio/wav;base64,${data.audio}`);
        audio.onended = () => setIsPlaying(false);
        setCurrentAudio(audio);
        audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('TTS failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-red-500/30 selection:text-red-200">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-red-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-950 border border-red-800 text-red-400 text-sm font-medium mb-6">
            Cybersecurity Alert
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">
            পিগ বুচারিং স্ক্যাম: <br />
            <span className="text-red-500">আপনার সর্বস্বান্ত হওয়ার গল্প</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            কীভাবে একটি সাধারণ 'রং নাম্বার' টেক্সট মেসেজ আপনার সারা জীবনের সঞ্চয় নিমেষেই শেষ করে দিতে পারে? জানুন সাইবার ক্রাইম ইতিহাসের সবচেয়ে ভয়ংকর এই ফাঁদ সম্পর্কে।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={toggleTTS}
              disabled={loading}
              className="group relative flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )}
              {isPlaying ? "গল্পটি থামান" : "গল্পটি শুনুন"}
            </button>
            
            <a 
              href="#story"
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-full font-semibold hover:bg-slate-800 transition-colors"
            >
              বিস্তারিত পড়ুন
            </a>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-slate-600" />
        </motion.div>
      </header>

      {/* Story Walkthrough */}
      <main id="story" className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-32">
          {scamStory.map((step, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-red-500 font-mono text-sm uppercase tracking-widest">
                  <span className="w-8 h-px bg-red-900" />
                  Step {index + 1}
                </div>
                <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                <p className="text-lg text-slate-400 leading-relaxed italic">
                  "{step.content}"
                </p>
              </div>
              <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                {step.icon}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Safety Tips */}
        <section className="mt-48 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-900/30">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <ShieldAlert className="w-8 h-8 text-red-500" />
              নিজেকে সুরক্ষিত রাখবেন কীভাবে?
            </h2>
            <div className="grid gap-6">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex gap-4 p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-red-900/50 transition-colors">
                  <div className="mt-1">{tip.icon}</div>
                  <p className="text-slate-300 font-medium">{tip.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center p-6 border-t border-slate-800">
              <p className="text-slate-500 text-sm mb-6">
                এই ডিজিটাল থ্রেট থেকে আপনার পরিবার এবং বন্ধুদের সুরক্ষিত রাখতে এই সচেতনতামূলক তথ্যগুলো শেয়ার করুন।
              </p>
              <button className="px-6 py-3 bg-red-600/10 text-red-500 border border-red-900/50 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all">
                সচেতনতা ছড়িয়ে দিন
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; 2026 পিগ বুচারিং স্ক্যাম সচেতনতা প্ল্যাটফর্ম। সুস্থ থাকুন, সুরক্ষিত থাকুন।</p>
      </footer>

      {/* Floating Audio Control */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-4 px-6 py-3 bg-red-600 rounded-full shadow-2xl shadow-red-900/40"
          >
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [8, 16, 8] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-white rounded-full"
                />
              ))}
            </div>
            <span className="text-white font-medium text-sm">গল্পটি চলছে...</span>
            <button 
              onClick={toggleTTS}
              className="p-1 hover:bg-white/10 rounded-full"
            >
              <VolumeX className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
