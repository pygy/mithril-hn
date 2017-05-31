import m from "mithril/hyperscript";
import route from "mithril/route";

export default class Pager {
    view(vnode) {
        return m(
            "p",
            {
                class: "mithril-Pager"
            },
            [
                m(
                    "a",
                    {
                        href: vnode.attrs.currentPage > 1 ? `/new/${vnode.attrs.currentPage - 1}` : "",
                        oncreate: route.link
                    },
                    "Previous"
                ),
                m(
                    "span",
                    {},
                    `${vnode.attrs.currentPage}/${vnode.attrs.totalPage}`
                ),
                m(
                    "a",
                    {
                        href: vnode.attrs.currentPage < vnode.attrs.totalPage ? `/new/${vnode.attrs.currentPage + 1}` : "",
                        oncreate: route.link
                    },
                    "Next"
                )
            ]
        );
    }
}
