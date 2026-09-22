import { ProjectSystem } from '../types';

export const INITIAL_SYSTEMS: ProjectSystem[] = [
  {
    id: 'erp-enterprise',
    title: 'نظام إدارة المؤسسات والموارد السحابي (Enterprise ERP & CRM)',
    titleEn: 'Enterprise Cloud ERP & Resource Management',
    subtitle: 'نظام متكامل لإدارة الفروع المتعددة، المخازن، الحسابات العامة، وإدارة علاقات العملاء مع تسويات مالية آلية',
    category: 'enterprise',
    categoryName: 'أنظمة المؤسسات',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'منظومة سحابية متقدمة مصممة للشركات الكبرى وسلاسل التوزيع، تشمل إدارة المستودعات متعددة المواقع، الفوترة الإلكترونية المعتمدة، شجرة الحسابات المالية التلقائية، وربط المشتريات والمبيعات مع محرك تدقيق فوري.',
    features: [
      'شجرة حسابات مالية وقيود محاسبية مؤتمتة وفق المعايير الدولية',
      'إدارة مستودعات متعددة الفروع مع تنبيهات ذكية لنقاط إعادة الطلب',
      'لوحة قياس أداء تنفيذية مع تقارير أرباح وخسائر وتدفق نقدي فوري',
      'نظام إدارة الصلاحيات المتقدم (RBAC) مع سجل تدقيق كامل لجميع العمليات',
      'إصدار فواتير ضريبية فورية وتوافق كامل مع الربط السحابي'
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'TailwindCSS'],
    architecture: {
      frontend: 'React SPA معماري مع محرك إدارة حالة موزع وتحميل تكسيري',
      backend: 'Node.js / Express Microservices مع طابور معالجة مهام موزع',
      database: 'PostgreSQL مكرر مع فهارس متقدمة للعمليات المالية المعقدة',
      caching: 'Redis Cluster لتخزين الجلسات والبيانات اللحظية المتكررة',
      security: 'تشفير AES-256 للبيانات، عزل فروع المؤسسات (Multi-Tenancy)',
      throughput: 'معالجة تتجاوز 4,500 معاملة متزامنة في الثانية'
    },
    metrics: {
      uptime: '99.98%',
      latency: '45ms',
      testCoverage: '94%',
      securityAudit: 'A+ Enterprise Verified'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/erp-enterprise',
    isProtectedView: true,
    previewType: 'erp',
    tags: ['ERP', 'CRM', 'Accounting', 'Multi-Branch', 'Zakat & Tax'],
    year: '2025 - 2026',
    clientSector: 'قطاع التجارة والصناعة والمؤسسات الكبرى',
    highlightStat: {
      label: 'معاملات مسجلة',
      value: '+2.4M'
    }
  },
  {
    id: 'medpulse-health',
    title: 'منصة الرعاية الصحية وإدارة المراكز الطبية (MedPulse Clinical)',
    titleEn: 'MedPulse Smart Health & Clinical Management System',
    subtitle: 'نظام رعاية صحية شامل لإدارة العيادات، الملف الطبي الموحد للمرضى، حجز المواعيد والوصفات الطبية الرقمية',
    category: 'healthcare',
    categoryName: 'الأنظمة الطبية',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'نظام طبي رقمي متقدم يربط بين الاستقبال، الأطباء، المختبرات، والصيدليات. يوفر سجلاً إلكترونياً شاملاً للمريض (EHR)، فحص التعارض الدوائي الذكي، وإدارة غرف العمليات والعيادات بدقة سريرية عالية.',
    features: [
      'الملف الطبي الرقمي الموحد وتاريخ الزيارات والتحاليل والأشعة',
      'جدولة مواعيد الاستشارات وإدارة أوقات الأطباء وغرف الفحص',
      'فحص تفاعل الأدوية تلقائياً لمنع الأخطاء الطبية في الوصفات',
      'تكامل فوري مع نتائج المختبرات والتقارير الطبية السريرية',
      'بوابة المريض التفاعلية للاطلاع على النتائج وإعادة صرف الأدوية'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'WebSockets', 'HIPAA Standard'],
    architecture: {
      frontend: 'واجهة عيادية فائقة السرعة مع تدفقات عمل من خطوة واحدة للأطباء',
      backend: 'خوادم معالجة مخصصة للسجلات الصحية بمعايير HL7 و FHIR',
      database: 'PostgreSQL مشفر بالكامل على مستوى الحقول الطبية الحساسة',
      caching: 'Redis لقوائم انتظار المراجعين الحية وغرف الطوارئ',
      security: 'تشفير شامل End-to-End متوافق مع معايير HIPAA وخصوصية المرضى',
      throughput: 'استجابة حية تقل عن 35ms داخل غرف الفحص'
    },
    metrics: {
      uptime: '99.99%',
      latency: '28ms',
      testCoverage: '96%',
      securityAudit: 'HIPAA & Healthcare Compliant'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/medpulse',
    isProtectedView: true,
    previewType: 'clinic',
    tags: ['EHR', 'Clinic', 'Telemedicine', 'Pharmacy', 'Appointments'],
    year: '2025',
    clientSector: 'المستشفيات والمجمعات الطبية التخصصية',
    highlightStat: {
      label: 'ملفات مرضى معالجة',
      value: '+380K'
    }
  },
  {
    id: 'fleet-logistics',
    title: 'نظام التتبع اللوجستي وإنترنت الأشياء للأساطيل (FleetTrack IoT)',
    titleEn: 'FleetTrack Intelligent IoT Telematics & Dispatch',
    subtitle: 'منظومة ذكية لتتبع الشاحنات والمندوبين اللحظي، تحسين المسارات، رصد استهلاك الوقود والصيانة الوقائية',
    category: 'logistics',
    categoryName: 'اللوجستيات وإنترنت الأشياء',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'محرك لوجستي يدمج بيانات أجهزة التتبع (GPS Telematics) مع خوارزميات الذكاء الاصطناعي لحساب المسارات الأسرع، ومراقبة سلوك السائقين واستهلاك الوقود ودرجات حرارة الشحنات المبردة لحظة بلحظة.',
    features: [
      'تتبع مباشر على الخريطة الجغرافية مع تحديث كل ثانية لكل شاحنة',
      'خوارزمية حساب المسار الأمثل (VRP) لتوفير 22% من تكاليف الوقود',
      'مراقبة الحمولات الحساسة (درجة الحرارة، الرطوبة، فتح الأبواب)',
      'سجل الصيانة الدورية وتنبيهات الأعطال المبكرة للمحركات',
      'نظام توزيع المهام وتوقيت الوصول التقديري (ETA) للعملاء'
    ],
    technologies: ['React', 'Leaflet/GIS', 'WebSockets', 'Go / Node.js', 'TimescaleDB', 'MQTT', 'Docker'],
    architecture: {
      frontend: 'عرض تفاعلي جيو-مكاني متزامن عالي الكثافة بدون أي تباطؤ',
      backend: 'محرك Go عالي الأداء لمعالجة ملايين حزم GPS و MQTT في الدقيقة',
      database: 'TimescaleDB مخصصة للبيانات المتسلسلة زمنياً (Time-Series)',
      caching: 'Redis Geospatial لحساب القرب الجغرافي السريع والتسييج الجغرافي',
      security: 'تشفير اتصالات أجهزة التتبع عبر بروتوكول TLS متبادل (mTLS)',
      throughput: 'استيعاب 50,000 إشارة تتبع متزامنة في الثانية'
    },
    metrics: {
      uptime: '99.97%',
      latency: '20ms',
      testCoverage: '91%',
      securityAudit: 'IoT Transport Verified'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/fleet-track',
    isProtectedView: true,
    previewType: 'fleet',
    tags: ['IoT', 'GPS Tracking', 'Logistics', 'Fleet', 'GIS'],
    year: '2024 - 2025',
    clientSector: 'شركات الشحن، التوزيع، وإدارة سلاسل الإمداد',
    highlightStat: {
      label: 'مركبات مخدومة',
      value: '+14,200'
    }
  },
  {
    id: 'finflow-pos',
    title: 'نظام نقاط البيع والمالية السحابي (FinFlow Cloud POS)',
    titleEn: 'FinFlow Cloud POS & Smart Fiscal Invoicing',
    subtitle: 'نظام كاشير فائق السرعة يدعم العمل بدون إنترنت، الفوترة الإلكترونية، وربط المدفوعات والبطاقات البنكية',
    category: 'fintech',
    categoryName: 'المالية ونقاط البيع',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'نظام نقاط بيع صمم لسرعة إنجاز العمليات في المتاجر والمطاعم والمعارض، يدعم المزامنة التلقائية عند انقطاع الإنترنت (Offline-First)، مع توليد فوري للرمز الشريطي والباركود المشفر المتوافق مع متطلبات هيئة الزكاة والضريبة.',
    features: [
      'واجهة كاشير لمسية بديهية تنجز عملية البيع في أقل من 3 ثوانٍ',
      'عمل مستمر بدون انقطاع عند انقطاع شبكة الإنترنت ومزامنة سحابية لاحقة',
      'توافق كامل مع الفاتورة الإلكترونية والمشفرة (QR Code)',
      'إدارة نوبات الكاشير والمطابقة المالية اليومية وجرد الصناديق',
      'دعم تقسيم الفواتير، طرق الدفع المتعددة، والطباعة الحرارية السريعة'
    ],
    technologies: ['React 19', 'TypeScript', 'IndexedDB', 'Node.js', 'SQLite/PostgreSQL', 'WebUSB'],
    architecture: {
      frontend: 'تطبيق ويب تقدمي (PWA) يعتمد بنية Offline-First مع تخزين محلي آمن',
      backend: 'خدمة سحابية خفيفة لتوحيد المبيعات والمخازن بين جميع المحطات',
      database: 'مزيج بين IndexedDB محلياً و PostgreSQL سحابياً مع حل تعارض ذكي',
      caching: 'Service Worker ذكي لأداء استجابة صفرية أثناء ذروة البيع',
      security: 'تشفير سجلات الفواتير بتوقيع رقمي غير قابل للتلاعب (Cryptographic Hash)',
      throughput: 'تسجيل فوري تحت 15ms لكل حركة بيع'
    },
    metrics: {
      uptime: '99.99%',
      latency: '15ms',
      testCoverage: '95%',
      securityAudit: 'Financial Grade Security'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/finflow-pos',
    isProtectedView: true,
    previewType: 'pos',
    tags: ['POS', 'Invoicing', 'Retail', 'FinTech', 'Offline-First'],
    year: '2025',
    clientSector: 'قطاع التجزئة، المطاعم، والمراكز التجارية',
    highlightStat: {
      label: 'فواتير مصدرة',
      value: '+5.1M'
    }
  },
  {
    id: 'nexcommerce-platform',
    title: 'منصة التجارة الإلكترونية وسلاسل التوريد (NexCommerce Hub)',
    titleEn: 'NexCommerce Omnichannel Commerce & B2B/B2C Engine',
    subtitle: 'منصة تسوق وسلاسل توريد هجينة متعددة البائعين مع بوابات دفع دولية وإدارة طلبات مؤتمتة',
    category: 'ecommerce',
    categoryName: 'التجارة الإلكترونية',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'محرك تجارة إلكترونية متطور يتحمل أوقات المواسم والعروض الكبرى، مزود بنظام كتالوج ذكي، تتبع شحنات مدمج، بوابة إدارة للتجار، ولوحة تحكم لإحصاءات القيمة الشرائية ورفع معدل التحويل.',
    features: [
      'سلة تسوق ودفع مرن بخطوة واحدة يدعم جميع بوابات الدفع الإلكتروني',
      'إدارة كتالوج المنتجات مع خيارات متغيرة والتحكم التلقائي بالمخزون',
      'بوابة تجار وموردين مستقلة لإدارة المبيعات وسحب المستحقات',
      'نظام كوبونات ذكي وحملات ترويجية ديناميكية مبنية على سلة العميل',
      'تكامل مباشر مع شركات الشحن لإصدار بوالص الشحن بنقرة واحدة'
    ],
    technologies: ['React', 'Next.js Arch', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe/Mada API'],
    architecture: {
      frontend: 'تصميم فائق السرعة مع تدابير Core Web Vitals وحجم حزمة محكم',
      backend: 'معمارية Event-Driven للتعامل مع الطلبات وتحديث المخازن فورياً',
      database: 'PostgreSQL مع قراءة متماثلة (Read Replicas) لتسريع التصفح',
      caching: 'Redis Caching على مستوى الكتالوج والأسعار',
      security: 'مطابقة صارمة لمعايير PCI-DSS للمدفوعات وحماية بيانات البطاقات',
      throughput: 'تحمل أكثر من 18,000 زائر متزامن أثناء حملات التخفيضات'
    },
    metrics: {
      uptime: '99.98%',
      latency: '38ms',
      testCoverage: '92%',
      securityAudit: 'PCI-DSS Tier 1 Ready'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/nexcommerce',
    isProtectedView: true,
    previewType: 'ecommerce',
    tags: ['E-Commerce', 'B2B', 'Payments', 'Shopping Cart', 'Inventory'],
    year: '2024 - 2025',
    clientSector: 'العلامات التجارية والمتاجر الكبرى والمنصات متعددة البائعين',
    highlightStat: {
      label: 'قيمة مبيعات سنوية',
      value: '+$34M'
    }
  },
  {
    id: 'docubrain-ai',
    title: 'محرك الذكاء الاصطناعي لتحليل المستندات والعقود (DocuBrain AI)',
    titleEn: 'DocuBrain AI Enterprise Knowledge & Legal Extractor',
    subtitle: 'محرك ذكاء اصطناعي لمعالجة الوثائق المؤسسية، استخراج البيانات، البحث الدلالي الذكي والإجابة على الاستفسارات',
    category: 'ai',
    categoryName: 'الذكاء الاصطناعي',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'حل مؤسسي يعتمد على النماذج اللغوية الكبيرة وتقنيات التضمين المتجهي (Vector Embeddings) لأرشفة وفهرسة آلاف العقود والمستندات، واستخراج البنود القانونية وتوليد ملخصات تنفيذية فورية مع توثيق المصادر بدقة.',
    features: [
      'استخراج ذكي للبيانات من ملفات PDF والصور والعقود الممسوحة ضوئياً',
      'بحث دلالي فائق الدقة (Semantic Search) يفهم المعنى والمضمون لا الكلمات فقط',
      'مقارنة تلقائية بين مسودات العقود لتحديد التغييرات والمخاطر القانونية',
      'واجهة استعلام ذكية تجيب على الأسئلة المستندة إلى وثائق الشركة فقط',
      'حماية مطلقة لسرية المستندات مع عزل تام وتشفير لبيانات المؤسسة'
    ],
    technologies: ['React 19', 'TypeScript', 'Python FastAPI', 'pgvector', 'LangChain', 'Docker'],
    architecture: {
      frontend: 'واجهة تفاعلية مع عرض مقارنة المستندات ومحدد النصوص الذكي',
      backend: 'خوادم معالجة موازية لتقطيع المستندات وتوليد التضمينات الشعاعية',
      database: 'PostgreSQL مع امتداد pgvector للبحث المتجهي السريع',
      caching: 'ذاكرة تخزين مؤقت للأسئلة الشائعة والملخصات المعتمدة',
      security: 'بيئة مغلقة ومحمية بدون إرسال البيانات للتدريب الخارجي',
      throughput: 'معالجة وثيقة 500 صفحة في أقل من 9 ثوانٍ'
    },
    metrics: {
      uptime: '99.95%',
      latency: '60ms',
      testCoverage: '90%',
      securityAudit: 'Enterprise AI Privacy Safe'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/docubrain-ai',
    isProtectedView: true,
    previewType: 'docubrain',
    tags: ['AI', 'RAG', 'Vector Search', 'NLP', 'Legal Tech'],
    year: '2025 - 2026',
    clientSector: 'المؤسسات القانونية، البنوك، والمكاتب الاستشارية',
    highlightStat: {
      label: 'وثائق تمت فهرستها',
      value: '+920K'
    }
  },
  {
    id: 'edumatrix-lms',
    title: 'منصة الأكاديمية والتعليم الرقمي التفاعلي (EduMatrix LMS)',
    titleEn: 'EduMatrix Interactive Academic & Training LMS',
    subtitle: 'نظام إدارة تعلم شامل مع فصول افتراضية، مسارات تدريب مهني، اختبارات إلكترونية وشهادات معتمدة',
    category: 'edtech',
    categoryName: 'التعليم والتدريب',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'بيئة تدريبية وأكاديمية متكاملة تقدم تجربة تعلم تفاعلية، تشمل مسارات وظيفية متقدمة، بنوك أسئلة ذات تصحيح آلي، رصد مباشر لتفاعل الطلاب وساعات المشاهدة، وتوليد شهادات رقمية مشفرة برمز QR.',
    features: [
      'مسارات تدريب متسلسلة مع آليات تتبع الإنجاز وفتح المحتوى التدريجي',
      'نظام اختبارات متقدم مع منع الغش وبنوك أسئلة عشوائية ومؤقتات ذكية',
      'فصول افتراضية متكاملة ودردشة فورية ومنتديات نقاش لكل مادة',
      'توليد تلقائي للشهادات الرقمية مع التحقق الفوري برمز الاستجابة السريعة',
      'تقارير تفصيلية لأداء الطلاب ومعدلات الاستبقاء وإكمال الدورات'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC', 'TailwindCSS'],
    architecture: {
      frontend: 'واجهة تعليمية سلسة تدعم البث المتكيف واستئناف المشاهدة التلقائي',
      backend: 'معمارية متدرجة لدعم آلاف الاختبارات المتزامنة أثناء الامتحانات',
      database: 'PostgreSQL لتخزين مسارات التدريب والسجلات الأكاديمية',
      caching: 'Redis لإدارة الجلسات الحية ونتائج التقييمات اللحظية',
      security: 'تشفير مقاطع الفيديو ضد التنزيل غير المصرح به، وتوثيق الشهادات',
      throughput: 'دعم 30,000 طالب متزامن في الامتحانات الموحدة'
    },
    metrics: {
      uptime: '99.96%',
      latency: '32ms',
      testCoverage: '93%',
      securityAudit: 'Academic Integrity Certified'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/edumatrix',
    isProtectedView: true,
    previewType: 'edtech',
    tags: ['LMS', 'EdTech', 'Video Streaming', 'Exams', 'Certificates'],
    year: '2024 - 2025',
    clientSector: 'الجامعات، مراكز التدريب المعتمدة، وأكاديميات الشركات',
    highlightStat: {
      label: 'شهادات رقمية مصدرة',
      value: '+165K'
    }
  },
  {
    id: 'aqar-estate',
    title: 'نظام إدارة الأصول العقارية والمزادات (AqarEstate Pro)',
    titleEn: 'AqarEstate Asset Management & Smart Auctions',
    subtitle: 'منظومة رقمية لإدارة المجمعات السكنية والتجارية، عقود الإيجار الرقمية، طلبات الصيانة والمزادات العقارية',
    category: 'proptech',
    categoryName: 'العقارات والأصول',
    status: 'production',
    statusName: 'منظومة حية بالإنتاج',
    description: 'نظام متخصص لإدارة المحافظ العقارية والأبراج، يوفر أرشفة إلكترونية لعقود الإيجار، وتتبع سداد المستأجرين، وجدولة أوامر الصيانة مع الفنيين، بالإضافة إلى بوابة مزادات عقارية للمستثمرين.',
    features: [
      'مخطط تفاعلي للوحدات العقارية يوضح نسب الإشغال والشاغر فورياً',
      'إدارة عقود الإيجار والتنبيه الآلي بمواعيد التجديد والاستحقاقات المالية',
      'بوابة للمستأجرين لرفع بلاغات الصيانة ومتابعة الفني حتى إتمام العمل',
      'نظام تقارير العائد على الاستثمار (ROI) والإيرادات الصافية لكل عقار',
      'مزادات عقارية حية مع نظام المزايدة في الوقت الفعلي وضمانات الدخول'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'TailwindCSS'],
    architecture: {
      frontend: 'واجهة بصرية ثلاثية ونماذج تفاعلية لمخططات المباني والوحدات',
      backend: 'نظام محاسبي عقاري متخصص مع محرك مزادات عالي التزامن',
      database: 'PostgreSQL مع فهارس متخصصة للبحث المكاني وتاريخ الأصول',
      caching: 'Redis للمزايدات الحية وحالات الوحدات اللحظية',
      security: 'تشفير العقود وتوثيق الهويات الرقمية للمستثمرين والمستأجرين',
      throughput: 'تزامن مزادات حية تحت 20ms لتحديث العطاءات'
    },
    metrics: {
      uptime: '99.98%',
      latency: '25ms',
      testCoverage: '94%',
      securityAudit: 'PropTech Verified'
    },
    viewOnlyUrl: 'https://demo.viewonly.systems/aqar-estate',
    isProtectedView: true,
    previewType: 'proptech',
    tags: ['Real Estate', 'PropTech', 'Auctions', 'Contracts', 'Maintenance'],
    year: '2025',
    clientSector: 'الشركات العقارية، المطورون، وصناديق الاستثمار العقاري',
    highlightStat: {
      label: 'وحدات عقارية مدارة',
      value: '+28,500'
    }
  }
];

const STORAGE_KEY = 'alamer_portfolio_systems_v1';

export function getStoredSystems(): ProjectSystem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_SYSTEMS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_SYSTEMS;
  } catch {
    return INITIAL_SYSTEMS;
  }
}

export function saveSystems(systems: ProjectSystem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(systems));
  } catch (err) {
    console.error('Failed to save systems to localStorage', err);
  }
}

export function resetToDefaultSystems(): ProjectSystem[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  return INITIAL_SYSTEMS;
}
