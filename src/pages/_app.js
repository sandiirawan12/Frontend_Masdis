import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/scrollbar';
import 'moment/locale/id';
import '../scss/style.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-day-picker/lib/style.css';
import 'regenerator-runtime/runtime';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { useStore } from '@/store/store';
import { persistStore } from 'redux-persist'
import React, { useMemo } from 'react';
import Root from '@/components/Root';
import { useMediaQuery } from 'react-responsive';

function MyApp({ Component, pageProps }) {
  const store = useStore()
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const content = useMemo(() => {
    let Layout = React.Fragment;
    if (Component.Layout) {
      if (Component.Layout?.mobile && isTabletOrMobile) {
        Layout = Component.Layout?.mobile
      } else if (Component.Layout?.desktop) {
        Layout = Component.Layout?.desktop
      } else {
        Layout = Component.Layout
      }
    }

    return <Root>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Root>

  }, [Component, pageProps, Root])

  return <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {content}
    </PersistGate>
  </Provider>
}

export default MyApp;
