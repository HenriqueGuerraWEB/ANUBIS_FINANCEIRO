import { useEffect, useState } from 'react';
import { 
  ChevronDown, 
  Check, 
  Star, 
  Shield, 
  Zap, 
  Brain, 
  BarChart3, 
  MessageCircle, 
  Camera, 
  FileText, 
  Users, 
  Award, 
  ArrowRight, 
  Menu, 
  X,
  Sparkles,
  TrendingUp,
  Lock,
  Clock,
  Globe,
  ChevronRight,
  Play,
  Target
} from 'lucide-react';
import { Button } from '@/react-app/components/Button';
import ThemeToggle from '@/react-app/components/ThemeToggle';
import { cn } from '@/react-app/lib/utils';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'como-funciona', 'recursos', 'precos', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Empresária",
      content: "O Anúbis mudou completamente minha relação com o dinheiro. Agora sei exatamente para onde vai cada real!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Carlos Santos",
      role: "Freelancer",
      content: "Incrível como uma simples foto do comprovante vira insights tão valiosos. Economizei 40% dos meus gastos!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Maria Oliveira",
      role: "Médica",
      content: "Finalmente uma ferramenta que entende minhas finanças melhor que eu mesma. Recomendo para todos!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Avançada",
      description: "Anúbis analisa e categoriza automaticamente todos os seus gastos com precisão de 99%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Foto = Análise",
      description: "Tire uma foto do comprovante e receba insights instantâneos sobre seu gasto",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Relatórios Inteligentes",
      description: "Dashboards personalizados que mostram exatamente onde você pode economizar",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Conversacional",
      description: "Converse naturalmente com Anúbis sobre suas finanças, como se fosse seu consultor pessoal",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Total",
      description: "Seus dados são criptografados e nunca compartilhados. Privacidade em primeiro lugar",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Insights Instantâneos",
      description: "Receba sugestões em tempo real para otimizar seus gastos e aumentar suas economias",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const faqItems = [
    {
      question: "Como o Anúbis funciona?",
      answer: "Você simplesmente tira uma foto do seu comprovante ou extrato, e nossa IA analisa automaticamente, categorizando gastos e oferecendo insights personalizados sobre suas finanças."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! Usamos criptografia de nível bancário e nunca compartilhamos suas informações. Seus dados ficam seguros em servidores protegidos no Brasil."
    },
    {
      question: "Posso usar sem cartão de crédito?",
      answer: "Sim! Oferecemos um plano gratuito robusto que não requer cartão de crédito. Você pode começar a usar hoje mesmo."
    },
    {
      question: "Funciona com todos os bancos?",
      answer: "Sim, o Anúbis trabalha com extratos e comprovantes de qualquer banco ou instituição financeira brasileira."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Você verá insights imediatos! Em 30 dias de uso, a maioria dos usuários economiza em média 25% dos gastos desnecessários."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 overflow-x-hidden transition-colors duration-300">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300"
          style={{ width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 glass-effect z-40 border-b border-gray-200/20 dark:border-gray-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl blur-lg opacity-30 animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  SATIVAR
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Anúbis Finc.</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { href: '#home', label: 'Início' },
                { href: '#como-funciona', label: 'Como Funciona' },
                { href: '#recursos', label: 'Recursos' },
                { href: '#precos', label: 'Preços' },
                { href: '#faq', label: 'FAQ' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                    activeSection === item.href.substring(1) 
                      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20" 
                      : "text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  )}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button size="sm" className="hidden md:inline-flex">
                Começar Grátis
              </Button>
              
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-gray-200/20 dark:border-gray-800/20 animate-slide-down">
            <div className="px-4 py-4 space-y-4">
              {[
                { href: '#home', label: 'Início' },
                { href: '#como-funciona', label: 'Como Funciona' },
                { href: '#recursos', label: 'Recursos' },
                { href: '#precos', label: 'Preços' },
                { href: '#faq', label: 'FAQ' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="block text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full">
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 border border-amber-200/30 dark:border-amber-800/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mais de 12.000 usuários confiam em nós</span>
                </div>
              </div>
              
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Transforme suas{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                      finanças
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transform scale-x-0 animate-pulse delay-1000" style={{ animation: 'scaleX 1s ease-out 1s forwards' }} />
                  </span>{' '}
                  com IA
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  Anúbis analisa seus gastos e te dá insights personalizados para economizar mais e viver melhor.{' '}
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">Sem cartão, dados 100% seguros.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="group shadow-xl shadow-amber-500/25">
                  <span className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Começar Grátis Agora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="outline" size="xl" className="group">
                  <span className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Ver Demo</span>
                  </span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-amber-500" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span>Dados seguros</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Setup em 2 minutos</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-fade-in-up delay-300">
              <div className="relative mx-auto max-w-md lg:max-w-lg">
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 animate-float opacity-80" />
                <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl -rotate-12 animate-float delay-1000 opacity-80" />
                
                {/* Main Card */}
                <div className="relative glass-effect rounded-3xl p-6 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 animate-glow-pulse">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Anúbis</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">IA Financeira</div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 max-w-xs animate-slide-up">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Olá! Envie uma foto do seu comprovante que eu analiso para você 📸</p>
                    </div>
                    
                    <div className="flex justify-end animate-slide-up delay-500">
                      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 rounded-2xl p-4 max-w-xs">
                        <div className="w-full h-24 bg-white/20 rounded-lg mb-2 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-700" />
                        </div>
                        <p className="text-sm font-medium">Comprovante.jpg</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 animate-slide-up delay-1000">
                      <div className="flex items-center space-x-2 mb-3">
                        <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                        <p className="text-sm text-gray-700 dark:text-gray-300">Analisando... Encontrei um gasto de R$ 45,00 em alimentação no Restaurante XYZ.</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                          <div className="flex items-start space-x-2">
                            <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5" />
                            <p className="text-xs text-amber-700 dark:text-amber-300">
                              💡 Dica: Você gastou 23% a mais em alimentação este mês. Que tal cozinhar mais em casa?
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 text-xs">
                            Ver Relatório
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            Mais Dicas
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Você se identifica com isso?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Milhões de pessoas lutam diariamente com esses desafios financeiros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "😰",
                title: "Não sei para onde vai meu dinheiro",
                description: "Chega no fim do mês e você não faz ideia de onde gastou tanto"
              },
              {
                emoji: "📊",
                title: "Planilhas complicadas demais",
                description: "Tentar controlar gastos manualmente é demorado e frustrante"
              },
              {
                emoji: "💸",
                title: "Gastos desnecessários",
                description: "Compras por impulso que poderiam ser evitadas com awareness"
              },
              {
                emoji: "🤔",
                title: "Falta de insights",
                description: "Não consegue identificar padrões nem oportunidades de economia"
              },
              {
                emoji: "⏰",
                title: "Sem tempo para organizar",
                description: "Vida corrida não permite dedicar tempo para finanças"
              },
              {
                emoji: "😵",
                title: "Decisões no escuro",
                description: "Toma decisões financeiras sem dados ou análise adequada"
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="group glass-effect rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20 hover:border-amber-300/30 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {problem.emoji}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como o <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Anúbis</span> funciona
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Três passos simples para revolucionar sua vida financeira
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Envie uma foto",
                  description: "Tire uma foto do comprovante, extrato ou nota fiscal. É só isso!",
                  icon: <Camera className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02", 
                  title: "IA analisa tudo",
                  description: "Anúbis processa e categoriza automaticamente com 99% de precisão",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Receba insights",
                  description: "Ganhe relatórios personalizados e dicas para economizar mais",
                  icon: <BarChart3 className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={cn(
                        "w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg",
                        step.color
                      )}>
                        {step.step}
                      </div>
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br rounded-full blur-xl opacity-30 animate-pulse",
                        step.color
                      )} />
                      {index < 2 && (
                        <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                      <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white", step.color)}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tecnologia de ponta para transformar sua relação com o dinheiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group glass-effect rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20 hover:border-amber-300/30 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  "inline-flex p-3 rounded-lg bg-gradient-to-br text-white mb-4 group-hover:scale-110 transition-transform duration-300",
                  feature.color
                )}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Milhares já transformaram suas finanças
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Veja os resultados reais de quem usa SATIVAR
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "12.000+", label: "Usuários Ativos", icon: <Users className="w-6 h-6" /> },
              { number: "250K+", label: "Documentos Analisados", icon: <FileText className="w-6 h-6" /> },
              { number: "99%", label: "Precisão da IA", icon: <Brain className="w-6 h-6" /> },
              { number: "4.9/5", label: "Avaliação dos Usuários", icon: <Star className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="glass-effect rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="glass-effect rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-amber-600 dark:text-amber-400">{testimonial.name}</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-500 w-8' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    )}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Escolha seu plano
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comece grátis e evolua conforme suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Gratuito",
                price: "R$ 0",
                period: "/mês",
                description: "Perfeito para começar",
                features: [
                  "50 análises por mês",
                  "Categorização automática",
                  "Relatórios básicos",
                  "Chat com Anúbis",
                  "Suporte por email"
                ],
                popular: false,
                cta: "Começar Grátis"
              },
              {
                name: "Pro",
                price: "R$ 19",
                period: "/mês",
                description: "Mais popular entre usuários",
                features: [
                  "Análises ilimitadas",
                  "Relatórios avançados",
                  "Insights preditivos",
                  "Conectar 3 contas bancárias",
                  "Exportar dados",
                  "Suporte prioritário"
                ],
                popular: true,
                cta: "Experimente Pro"
              },
              {
                name: "Premium",
                price: "R$ 39",
                period: "/mês",
                description: "Para quem quer o máximo",
                features: [
                  "Tudo do Pro +",
                  "Consultor IA personalizado",
                  "Alertas em tempo real",
                  "Planejamento de objetivos",
                  "Contas bancárias ilimitadas",
                  "Relatórios personalizados",
                  "Suporte via WhatsApp"
                ],
                popular: false,
                cta: "Escolher Premium"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={cn(
                  "relative rounded-3xl p-8 border transition-all duration-300 transform hover:scale-105 animate-fade-in-up",
                  plan.popular 
                    ? 'glass-effect border-amber-300/50 dark:border-amber-700/50 shadow-xl shadow-amber-500/25' 
                    : 'glass-effect border-gray-200/20 dark:border-gray-700/20 hover:border-amber-300/30'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={cn(
                    "w-full",
                    plan.popular ? "" : "variant-outline"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up delay-300">
            <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Shield className="w-5 h-5" />
              <span>30 dias de garantia • Cancele quando quiser • Sem permanência</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Dúvidas frequentes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tudo que você precisa saber sobre o SATIVAR
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-amber-500 transition-transform duration-300",
                      openFaq === index ? 'rotate-180' : ''
                    )}
                  />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-slide-down">
                    <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Pronto para transformar suas{' '}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                finanças?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Junte-se a milhares de pessoas que já revolucionaram sua vida financeira com Anúbis
            </p>
            
            <div className="glass-effect border border-gray-200/20 dark:border-gray-700/20 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-amber-500" />
                <span className="text-lg font-semibold text-amber-600 dark:text-amber-400">Oferta Especial de Lançamento</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <span className="text-2xl font-bold">30 dias grátis</span> do plano Pro para novos usuários
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sem compromisso • Cancele quando quiser • Não precisa de cartão
              </p>
            </div>

            <div className="space-y-4">
              <Button size="xl" className="shadow-2xl shadow-amber-500/25 group">
                <span className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6" />
                  <span>Começar Minha Transformação</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Mais de 12.000 pessoas já começaram • Avaliação 4.9/5 ⭐
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    SATIVAR
                  </span>
                  <div className="text-xs text-gray-400 font-medium">Anúbis Finc.</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolucionando a gestão financeira pessoal com inteligência artificial. 
                Seus dados seguros, suas finanças organizadas.
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-100">
              <h4 className="font-semibold mb-4 text-white">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Recursos</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Preços</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Segurança</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>API</span><ChevronRight className="w-3 h-3" /></a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Sobre nós</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Blog</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Carreiras</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Imprensa</span><ChevronRight className="w-3 h-3" /></a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up delay-300">
              <h4 className="font-semibold mb-4 text-white">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Central de Ajuda</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Contato</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Status</span><ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center space-x-1"><span>Privacidade</span><ChevronRight className="w-3 h-3" /></a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between animate-fade-in-up delay-400">
            <p className="text-gray-400 text-sm">
              © 2024 SATIVAR. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
