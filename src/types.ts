export type SystemCategory = 
  | 'all'
  | 'enterprise'
  | 'healthcare'
  | 'logistics'
  | 'ecommerce'
  | 'fintech'
  | 'edtech'
  | 'proptech'
  | 'ai';

export type SystemStatus = 'production' | 'active_beta' | 'confidential_enterprise';

export type SystemPreviewType = 
  | 'erp'
  | 'clinic'
  | 'fleet'
  | 'ecommerce'
  | 'pos'
  | 'edtech'
  | 'proptech'
  | 'docubrain'
  | 'custom';

export interface SystemArchitecture {
  frontend: string;
  backend: string;
  database: string;
  caching: string;
  security: string;
  throughput: string;
}

export interface SystemMetrics {
  uptime: string;
  latency: string;
  testCoverage: string;
  securityAudit: string;
}

export interface ProjectSystem {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  category: SystemCategory;
  categoryName: string;
  status: SystemStatus;
  statusName: string;
  description: string;
  features: string[];
  technologies: string[];
  architecture: SystemArchitecture;
  metrics: SystemMetrics;
  viewOnlyUrl: string;
  isProtectedView: boolean;
  previewType: SystemPreviewType;
  tags: string[];
  year: string;
  clientSector: string;
  highlightStat: {
    label: string;
    value: string;
  };
}

export interface FilterState {
  category: SystemCategory;
  status: string;
  searchQuery: string;
}
