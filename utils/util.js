const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const args = Object.assign(params, {
                    success: res => {
                        if (res.statusCode >= 200 && res.statusCode <= 299) {
                            resolve(res)
                        }
                        reject(res)
                    },
                    fail: error => {
                        reject(error)
                    }
                })
                func(args)
            } catch (e) {
                reject(e)
            }

        })
    }
}
const combination = function (arr, size) {
    var r = [];

    function _(t, a, n) {
        if (n === 0) {
            r[r.length] = t;
            return;
        }
        for (var i = 0, l = a.length - n; i <= l; i++) {
            var b = t.slice();
            b.push(a[i]);
            _(b, a.slice(i + 1), n - 1);
        }
    }

    _([], arr, size);
    return r;
}


export {promisic, combination}
