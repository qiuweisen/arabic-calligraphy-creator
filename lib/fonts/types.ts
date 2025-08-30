// Font types and interfaces
export interface FontFeature {
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface TechnicalDetail {
  title: string;
  value: string;
  description: string;
}

export interface TextExample {
  id: string;
  text: string;
  translation: string;
  context: string;
}

export interface FontDetails {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: FontFeature[];
  useCases: UseCase[];
  technicalDetails: TechnicalDetail[];
  textExamples: TextExample[];
  category: string;
  designer: string;
  license: string;
}