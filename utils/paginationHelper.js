
exports.getLimitAndOffset = (page, pageSize) => {
    page = page ? page : 1;
    pageSize = pageSize ? pageSize : 10
    const limit = parseInt(pageSize);
    const offset = (parseInt(page) - 1) * pageSize;
    return { limit, offset, pageSize };
};

exports.pagination = async (page, pageSize, total) => {
    let pagesize, offset, previouspage, nextpage, totalPages;
    page = page ? parseInt(page) : 1;
    pageSize = pageSize ? pageSize : 10
    pagesize = parseInt(pageSize);
    previouspage = (page <= 1) ? null : page - 1;
    nextpage = ((total / pagesize) > page) ? page + 1 : null;
    totalPages = total < pageSize ? 1 : Math.ceil(total / pageSize);

    return {
        'previousPage': previouspage,
        'currentPage': page,
        'nextPage': nextpage,
        'total': total,
        'totalPages': totalPages,
        'pageSize': pagesize,
        'offset': offset
    }
}