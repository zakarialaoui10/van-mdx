import {TableOfContents as _TableOfContents} from 'zextra/nav'

export const TableOfContents = ({
    depth = 6,
    content = document.body,
    labelFn
} = {}) => _TableOfContents({depth}).element