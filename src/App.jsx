import { motion } from "framer-motion";

const IconArrowUpRight = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const IconChevronDown = ({ className = "", size = 14 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const IconCode = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

const IconDatabase = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);

const IconGithub = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.25 9.28 7.76 10.79.57.1.78-.25.78-.56 0-.28-.01-1.2-.02-2.18-3.15.69-3.81-1.34-3.81-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.69.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .1.64 2.62 3.87 1.86.1-.73.39-1.23.7-1.51-2.52-.29-5.18-1.26-5.18-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.46.11-3.05 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.59.23 2.76.11 3.05.72.79 1.16 1.8 1.16 3.04 0 4.35-2.67 5.31-5.21 5.59.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.2.67.79.56A11.27 11.27 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
  </svg>
);

const IconLinkedin = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.49 1 2.5 2.5 0 0 1 4.98 3.5ZM.5 8h4V23h-4ZM8 8h3.83v2.05h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.12V23h-4v-7.84c0-1.87-.03-4.28-2.61-4.28-2.62 0-3.02 2.05-3.02 4.14V23H8Z" />
  </svg>
);

const IconMail = ({ className = "", size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconSparkles = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3l1.9 4.6L18.5 9 13.9 10.4 12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3Z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
  </svg>
);

const IconWorkflow = ({ className = "", size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
    <path d="M10 6.5h4" />
    <path d="M17.5 10v4" />
    <path d="M14 17.5h-4a3 3 0 0 1-3-3v-1" />
  </svg>
);

const projects = [
  {
    title: "Operador Controle de Acordos",
    category: "JavaScript · Experiência operacional",
    description:
      "Interface orientada a fluxo para acompanhamento e controle de acordos, com leitura clara, estrutura funcional e presença visual precisa.",
    accent: "from-cyan-400/30 via-sky-400/10 to-transparent",
    href: "https://github.com/abnermoralesdefreitas/Operador-Controle-de-Acordos",
  },
  {
    title: "smart-collect",
    category: "JavaScript · Automação e inteligência",
    description:
      "Projeto voltado para automação com linguagem visual direta, estrutura tecnológica limpa e foco em eficiência.",
    accent: "from-violet-400/30 via-fuchsia-400/10 to-transparent",
    href: "https://github.com/abnermoralesdefreitas/smart-collect",
  },
  {
    title: "Automação Cobrança n8n",
    category: "n8n · Orquestração de processos",
    description:
      "Automação de cobrança pensada para encadeamento inteligente de tarefas, produtividade e clareza de operação.",
    accent: "from-emerald-400/30 via-teal-400/10 to-transparent",
    href: "https://github.com/abnermoralesdefreitas/automacao-cobranca-n8n",
  },
  {
    title: "Projeto AWS Farmácia",
    category: "Cloud · Estratégia e arquitetura",
    description:
      "Estudo aplicado sobre uso de serviços AWS para otimização de custos, conectando visão técnica e lógica de negócio.",
    accent: "from-amber-300/30 via-orange-300/10 to-transparent",
    href: "https://github.com/abnermoralesdefreitas/projeto-aws-farmacia",
  },
  {
    title: "Excel Dashboard Business Intelligence",
    category: "BI · Dados e visualização",
    description:
      "Dashboard interativo de vendas com foco em ETL via Power Query e visualização orientada à leitura executiva.",
    accent: "from-blue-300/30 via-indigo-300/10 to-transparent",
    href: "https://github.com/abnermoralesdefreitas/excel-dashboard-business-intelligence",
  },
  {
    title: "Pipeline ETL Python",
    category: "Python · Dados e personalização",
    description:
      "Estrutura ETL pensada para transformar dados brutos em mensagens de marketing mais relevantes e direcionadas.",
    accent: "from-pink-300/30 via-rose-300/10 to-transparent",
    href: "https://github.com/abnermoralesdefreitas/pipeline-etl-python",
  },
];

const stacks = [
  "React",
  "Vite",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript",
  "Python",
  "SQL",
  "AWS",
  "Power Query",
  "Excel",
  "n8n",
  "GitHub",
];

const pillars = [
  {
    icon: IconSparkles,
    title: "Estética com intenção",
    text: "Interfaces que respiram precisão, contraste e memória visual. Menos ruído, mais presença.",
  },
  {
    icon: IconWorkflow,
    title: "Soluções com ritmo",
    text: "Interesse por automações, fluxos inteligentes e experiências que unem clareza, utilidade e refinamento.",
  },
  {
    icon: IconCode,
    title: "Construção autoral",
    text: "Código e sensibilidade visual trabalhando juntos para criar experiências fortes, limpas e marcantes.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/55">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}

export default function PortfolioPremiumSite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#04050b] text-white selection:bg-cyan-300/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_82%_14%,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#04050b_0%,#070a13_35%,#050711_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:84px_84px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/18 blur-[130px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-500/16 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#04050b]/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_45%,rgba(34,211,238,0.14))]" />
              <span className="relative text-sm font-semibold tracking-[0.32em] text-white/90">AM</span>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">Portfólio</p>
              <p className="text-sm font-medium text-white/90">Abner Morales</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#sobre" className="text-sm text-white/58 transition duration-300 hover:text-white">Sobre</a>
            <a href="#projetos" className="text-sm text-white/58 transition duration-300 hover:text-white">Projetos</a>
            <a href="#stack" className="text-sm text-white/58 transition duration-300 hover:text-white">Stack</a>
            <a href="#contato" className="text-sm text-white/58 transition duration-300 hover:text-white">Contato</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/abnermoralesdefreitas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              aria-label="GitHub"
            >
              <IconGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abner-morales-de-freitas-093426301"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <IconLinkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
          <div className="grid items-end gap-14 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <motion.div
                custom={0.05}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white/58 backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,1)]" />
                estudante de ADS · experiências digitais · automações
              </motion.div>

              <motion.h1
                custom={0.12}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              >
                Eu construo
                <span className="bg-[linear-gradient(135deg,#ffffff_0%,#b3f4ff_25%,#c4b5fd_60%,#ffffff_100%)] bg-clip-text text-transparent"> presença digital </span>
                com código, estética e visão de futuro.
              </motion.h1>

              <motion.p
                custom={0.22}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-white/64 md:text-lg"
              >
                Sou Abner Morales, estudante de Análise e Desenvolvimento de Sistemas. Tenho interesse por interfaces impactantes, automações, dados e projetos que unem clareza técnica com linguagem visual forte. Meu olhar está onde tecnologia e direção criativa se encontram.
              </motion.p>

              <motion.div
                custom={0.3}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#projetos"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-4 text-sm font-medium text-slate-950"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#b6f7ff_30%,#c7b6ff_72%,#ffffff_100%)]" />
                  <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(224,247,255,0.95),rgba(231,223,255,0.95))]" />
                  <span className="relative flex items-center gap-2">
                    Ver projetos
                    <IconArrowUpRight size={16} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-medium text-white/86 transition duration-300 hover:bg-white/10"
                >
                  Entrar em contato
                </a>
              </motion.div>

              <motion.div
                custom={0.38}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {[
                  ["Foco", "interfaces, dados e automações"],
                  ["Linguagem", "minimalismo premium com personalidade"],
                  ["Interesse", "tecnologia que causa impacto visual"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.7rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/38">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-white/82">{value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              custom={0.22}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[2.6rem] bg-[conic-gradient(from_210deg,rgba(168,85,247,0.18),rgba(34,211,238,0.18),rgba(255,255,255,0.08),rgba(168,85,247,0.18))] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.46)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_30%,transparent_68%,rgba(34,211,238,0.08))]" />
                <div className="relative rounded-[1.8rem] border border-white/10 bg-[#07101e] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/45">
                      live system
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#0d1730,#101734_50%,#081220)] p-5"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/55">Creative signal</p>
                          <p className="mt-2 text-xl font-medium text-white/92">Interface, ritmo e precisão</p>
                        </div>
                        <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(125,211,252,0.08))]" />
                      </div>

                      <div className="mt-10 space-y-3">
                        <div className="h-28 rounded-[1.3rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.12),rgba(255,255,255,0.06))]" />
                        <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
                          <div className="h-24 rounded-[1.15rem] bg-white/5" />
                          <div className="h-24 rounded-[1.15rem] bg-white/5" />
                        </div>
                      </div>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Perfil</p>
                        <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">ADS</p>
                        <p className="mt-2 text-sm leading-6 text-white/58">Tecnologia, dados, automações e interfaces com assinatura visual forte.</p>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Direção</p>
                        <p className="mt-4 text-sm leading-7 text-white/74">Construções digitais que equilibram lógica, acabamento e desejo visual.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-14 flex justify-center"
          >
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/44 transition duration-300 hover:text-white/80"
            >
              continuar
              <IconChevronDown size={14} className="transition duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8"
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">Sobre mim</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                Criatividade técnica, repertório em formação e uma busca constante por impacto visual.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 backdrop-blur-2xl md:p-8"
            >
              <p className="text-sm leading-8 text-white/68 md:text-base">
                Meu interesse pela área nasce da combinação entre construção lógica e linguagem visual. Gosto de explorar a tecnologia como ferramenta de expressão e solução: interfaces que chamam atenção pelo acabamento, automações que tornam processos mais inteligentes e projetos que transformam dados em algo útil, legível e bem apresentado.
              </p>
              <p className="mt-5 text-sm leading-8 text-white/68 md:text-base">
                Como estudante de ADS, venho desenvolvendo repertório em desenvolvimento, análise, visualização e organização de sistemas. O que me move é criar experiências digitais que transmitam cuidado, clareza e personalidade — peças que funcionam bem, comunicam bem e deixam uma impressão forte.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Perfil", "criativo e ambicioso"],
                  ["Interesse", "produto, interface e automação"],
                  ["Visão", "tecnologia com identidade"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.3rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/38">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-white/82">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projetos" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <SectionTitle
              eyebrow="Projetos"
              title="Seleção de trabalhos que cruzam interface, automação, dados e raciocínio de produto."
              description="Cada projeto revela uma parte do meu repertório: organização de fluxos, leitura visual, exploração de tecnologias e interesse por soluções digitais com identidade."
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.02))]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
                      {project.category}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/65 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                      <IconArrowUpRight size={18} />
                    </div>
                  </div>

                  <div className="mt-10 overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(145deg,#0a1120,#10182c_55%,#09111e)] p-4">
                    <div className="mb-3 flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
                    </div>
                    <div className="h-28 rounded-[1.15rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.07))]" />
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white/95">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8"
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">Stack</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                Ferramentas e tecnologias que moldam meu repertório.
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/64 md:text-base">
                Trabalho com tecnologias ligadas a front-end, dados, automação e construção de soluções digitais. O interesse está tanto na parte técnica quanto na capacidade de transformar complexidade em experiência clara.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 backdrop-blur-2xl md:p-8"
            >
              <div className="flex flex-wrap gap-3">
                {stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3 text-white/82">
                    <IconCode size={18} />
                    <p className="text-sm font-medium">Front-end e experiência</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    React, Vite, TailwindCSS e Framer Motion para interfaces com presença, ritmo e acabamento premium.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3 text-white/82">
                    <IconDatabase size={18} />
                    <p className="text-sm font-medium">Dados e automação</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    Python, SQL, Excel, Power Query, AWS e n8n aplicados em fluxos, organização e inteligência operacional.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-[1.9rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-200/18"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/82">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">{pillar.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:p-10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_24%,rgba(34,211,238,0.10),rgba(168,85,247,0.10),transparent_78%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">Contato</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                  Aberto a conexões, projetos e oportunidades com ambição criativa.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/66 md:text-base">
                  Para conversar sobre tecnologia, interfaces, automações, projetos digitais ou novas oportunidades, meus canais estão logo abaixo.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                <a
                  href="https://github.com/abnermoralesdefreitas"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-4 text-sm font-medium text-slate-950"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#b6f7ff_30%,#c7b6ff_72%,#ffffff_100%)]" />
                  <span className="relative flex items-center gap-2">
                    GitHub
                    <IconArrowUpRight size={16} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abner-morales-de-freitas-093426301"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-medium text-white/88 transition duration-300 hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:abnerpef@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-medium text-white/88 transition duration-300 hover:bg-white/10"
                >
                  <IconMail size={16} />
                  abnerpef@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
