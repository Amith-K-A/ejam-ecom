export interface TextInput {
  placeholder?: string;
  reference?: null;
  id?: string;
  errorText?: string;
  error?: any;
  type?: string;
  required?: boolean;
  onChange(arg: any): any;
  value?: any;
}
