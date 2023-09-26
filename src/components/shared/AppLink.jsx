import Link from 'next/link';
function isLink(href) {
    return href !== undefined;
}
function isSimpleLink(href) {
    return href !== undefined && typeof href === 'string';
}
function isExternal(href) {
    return /^(https?:)?\/\//.test(href);
}

function AppLink(props) {
    const { href, children, ...anchorProps } = props;

    let link;

    if (!isLink(href) || (isSimpleLink(href) && isExternal(href))) {
        link = <a href={href} {...anchorProps}>{children}</a>;
    } else {
        const linkProps = typeof href === 'string' ? { href } : href;

        link = (
            <Link {...linkProps}>
                <a {...anchorProps}>{children}</a>
            </Link>
        );
    }

    return link;
}

export default AppLink;