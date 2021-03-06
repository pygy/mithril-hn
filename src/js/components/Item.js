import m from "mithril/index";

export default class Item {
    view(vnode) {
        return m(
            "article",
            {
                class: "mithril-Item",
                key: vnode.attrs.key
            },
            [
                m(
                    "span",
                    {
                        class: "mithril-Item-id"
                    },
                    vnode.attrs.id
                ),
                m(
                    "div",
                    {
                        class: "mithril-Item-body"
                    },
                    [
                        m(
                            "h2",
                            {},
                            m(
                                "a",
                                {
                                    class: "mithril-Item-link",
                                    href: vnode.attrs.link
                                },
                                vnode.attrs.title
                            )
                        ),
                        m(
                            "p",
                            {
                                class: "mithril-Item-footer"
                            },
                            [
                                vnode.attrs.points ? ` ${vnode.attrs.points} points ` : null,
                                vnode.attrs.user ? m(
                                    "a",
                                    {
                                        class: "mithril-Item-user",
                                        href: vnode.attrs.user
                                    },
                                    vnode.attrs.user
                                ) : null,
                                ` ${vnode.attrs.timeAgo} `,
                                m(
                                    "span",
                                    {},
                                    m(
                                        "a",
                                        {
                                            class: "mithril-Item-comment",
                                            href: vnode.attrs.link
                                        },
                                        [
                                            " | ",
                                            `${vnode.attrs.comments} comments`
                                        ]
                                    )
                                )
                            ]
                        )
                    ]
                ),
            ]
        );
    }
}
