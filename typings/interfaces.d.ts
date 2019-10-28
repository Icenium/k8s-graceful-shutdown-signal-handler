interface KubernetesGracefulShutdownSignalHandler {
    shouldShutdownGracefully: boolean;
    installSignalHandler(): void;
}

declare module "k8s-graceful-shutdown-signal-handler" {
    export const kubernetesGracefulShutdownSignalHandler: KubernetesGracefulShutdownSignalHandler;
}
