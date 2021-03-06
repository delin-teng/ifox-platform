package com.ifox.platform.common.rest;

public class PageInfo {

    /**
     * 总记录数
     */
    private int totalCount;

    /**
     * 当页数量
     */
    private int pageSize;

    /**
     * 页码
     */
    private int pageNo;

    public PageInfo() {
    }

    public PageInfo(int totalCount, int pageSize, int pageNo) {
        this.totalCount = totalCount;
        this.pageSize = pageSize;
        this.pageNo = pageNo;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNo() {
        return pageNo;
    }

    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }

    @Override
    public String toString() {
        return "PageInfo{" +
            "totalCount=" + totalCount +
            ", pageSize=" + pageSize +
            ", pageNo=" + pageNo +
            '}';
    }
}
