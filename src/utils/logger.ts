class Logger {
  private adapter: ('console' | 'db')[] = ['console'];

  private pattern = '[UI YYYY-MM-DD HH:mm:ss]';

  log(...args: any[]) {
    this.adapterLog(...args);
  }

  error(...args: any[]) {
    this.adapterError(...args);
  }

  private adapterLog(...args: any[]) {
    if (this.adapter.includes('console')) {
      this.console(...args);
    }
  }

  private adapterError(...args: any[]) {
    if (this.adapter.includes('console')) {
      this.logError(...args);
    }
  }

  private console(...args: any[]) {
    const logInfo = this.pattern
      .replace('YYYY', new Date().getFullYear().toString())
      .replace('MM', (new Date().getMonth() + 1).toString().padStart(2, '0'))
      .replace('DD', new Date().getDate().toString().padStart(2, '0'))
      .replace('HH', new Date().getHours().toString())
      .replace('mm', new Date().getMinutes().toString())
      .replace('ss', new Date().getSeconds().toString());

    console.log(logInfo, ...args);
  }

  private logError(...args: any[]) {
    const logInfo = this.pattern
      .replace('YYYY', new Date().getFullYear().toString())
      .replace('MM', (new Date().getMonth() + 1).toString())
      .replace('DD', new Date().getDate().toString())
      .replace('HH', new Date().getHours().toString())
      .replace('mm', new Date().getMinutes().toString())
      .replace('ss', new Date().getSeconds().toString());

    console.error(logInfo, ...args);
  }
}

const logger = new Logger();

export default logger;
