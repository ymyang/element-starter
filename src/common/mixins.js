export default {
    methods: {
        jump (to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        formatDate (value) {
            if (!value) {
                return ''
            }
            const d = new Date(value)
            const m = d.getMonth() + 1
            return d.getFullYear() + '-' + m + '-' + d.getDate()
        },
        getQueryStr (name) {
            const reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)', 'i')
            const search = location.href.substr(location.href.indexOf('?'))
            const r = search.substr(1).match(reg);
            if(r != null) {
              return unescape(r[2])
            }
            return null
        }
    }
}