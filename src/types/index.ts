export interface ToolResult {
  id: string;
  toolId: string;
  description: string;
}

export interface ToolData {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface CaseData {
  id: string;
  title: string;
  results: ToolResult[];
  correctCauses: string[];
}

export interface Score{
  value: number | null
}