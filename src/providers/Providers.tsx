'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { useAuthHydration } from '@/hooks/useAuthHydration';

// function AuthHydrator({ children }: { children: React.ReactNode }) {
//   useAuthHydration();
//   return <>{children}</>;
// }

export function Providers({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        {/* <AuthHydrator> */}
            {children}

        {/* </AuthHydrator> */}
      </Provider>
    );
}
