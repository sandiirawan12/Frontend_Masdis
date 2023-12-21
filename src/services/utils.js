export const url = {
    home: () => '/',

    blogs: () => '/blogs/',

    blog: (slug) => `/blogs/${slug}`,

    category: (category) => `/shop/catalog/${category.slug}`,

    product: (product) => `/shop/products/${product.slug}`,

    generalProduct: (slug) => `/product/category/detail/${slug}`,

    accountProfile: () => ({ href: '/user/profile' }),

    accountPoin: () => ({ href: '/user/poin' }),

    accountQuickpick: () => ({ href: '/user/quickpick', as: '/user/quickpick' }),

    accountPurchase: () => ({ href: '/user/purchase?status=', as: '/user/purchase?status=' }),

    accountInvoice: () => ({ href: '/user/invoice', as: '/user/invoice' }),

    accountCoupon: () => ({ href: '/user/coupon' }),

    accountFavourite: () => ({ href: '/user/favorite' }),

    accountReview: () => ({ href: '/user/review' }),

    accountInbox: () => ({ href: '/user/inbox' }),

};
