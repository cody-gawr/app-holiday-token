export default {
  computed: {
    pagedData () {
      return this.tableData.slice(this.from, this.to)
    },
    /***
     * Searches through table data and returns a paginated array.
     * Note that this should not be used for table with a lot of data as it might be slow!
     * Do the search and the pagination on the server and display the data retrieved from server instead.
     * @returns {computed.pagedData}
     */
    queriedData () {
      if (!this.searchQuery) {
        this.pagination.total = this.tableData.length
        return this.pagedData
      }
      let result = this.tableData
        .filter((row) => {
          let isIncluded = false
          for (let key of this.propsToSearch) {
            let rowValue = row[key].toString()
            if (rowValue.includes && rowValue.includes(this.searchQuery)) {
              isIncluded = true
            }
          }
          return isIncluded
        })
      this.pagination.total = result.length
      return result.slice(this.from, this.to)
    },
    to () {
      let highBound = this.from + this.pagination.perPage
      if (this.total < highBound) {
        highBound = this.total
      }
      return highBound
    },
    from () {
      return this.pagination.perPage * (this.pagination.currentPage - 1)
    },
    total () {
      this.pagination.total = this.tableData.length
      return this.tableData.length
    }
  },
  data() {
    return {
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      propsToSearch: ['name', 'email', 'age'],
      searchQuery: '',
      searchedData: [],
      fuseSearch: null
    }
  }
}
