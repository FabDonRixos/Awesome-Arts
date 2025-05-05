interface IEnvironmentVariable {
    VERSION: string;
}

export const envVariables: IEnvironmentVariable = {
    VERSION: import.meta.env.VITE_VERSION,
};
