'use strict';

class KubernetesGracefulShutdownSignalHandler {
    constructor() {
        this.gracefulShutdown = false;
    }

    get shouldShutdownGracefully() {
        return this.gracefulShutdown;
    }

    installSignalHandler() {
        if (process.env.RUNNING_KUBERNETES) {
            process.on('SIGUSR1', () => {
                this.gracefulShutdown = true;
            });
        }
    }
}

const kubernetesGracefulShutdownSignalHandler = new KubernetesGracefulShutdownSignalHandler();
module.exports.kubernetesGracefulShutdownSignalHandler = kubernetesGracefulShutdownSignalHandler;
