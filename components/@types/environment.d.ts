/** @format */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'dev' | 'prod';
      PORT?: string;
      SET_SAND_BOX_MODE: boolean;
      API_SECRET: string;
      API_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
