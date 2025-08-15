declare module '@emailjs/browser' {
  export function init(publicKey: string): void;
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>
  ): Promise<any>;
}