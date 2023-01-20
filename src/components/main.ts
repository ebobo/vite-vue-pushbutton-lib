import type { App } from 'vue';
import { PushButton } from '@/components';

export default {
  install: (app: App) => {
    app.component('PushButton', PushButton);
  },
};

export { PushButton };
