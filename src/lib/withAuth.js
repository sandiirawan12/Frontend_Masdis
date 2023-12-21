import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function withAuth(Component = null, options = {}) {
    function CustomRoute(props) {
        const auth = useSelector(state => state.auth)
        const router = useRouter()
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

        useEffect(() => {
            if (!auth && options.auth) {
                router.push(options.pathAfterFailure);
            } else if (auth && !options.auth) {
                router.push(options.pathAfterFailure);
            }
        }, [])
        if (!auth && options.auth) {
            return null;
        } else if (auth && !options.auth) {
            return null;
        }

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

        return <Layout>
            <Component {...props} />
        </Layout>

    }

    return CustomRoute
}


export default withAuth;