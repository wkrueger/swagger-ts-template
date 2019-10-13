"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SwaggerRequester {
    paramBuilder(operation, data) {
        const request = {
            verb: String(operation.verb).toUpperCase(),
            url: operation.path,
            query: {},
            body: {},
            headers: {}
        };
        operation.parameters.forEach(param => {
            const value = data[param.name];
            if (!value)
                return;
            switch (param.in) {
                case "path":
                    const rgx = new RegExp("{" + param.name + "}");
                    request.url = request.url.replace(rgx, encodeURIComponent(value));
                    break;
                case "body":
                    request.body = value;
                    break;
                //leave encoding to the sender fn
                case "query":
                    request[param.in] = request[param.in] || {};
                    request[param.in][param.name] = value;
                    break;
                case "header":
                case "headers":
                    request.headers = request.headers || {};
                    request.headers[param.name] = value;
                    break;
            }
        });
        return request;
    }
}
exports.SwaggerRequester = SwaggerRequester;
exports.settings = {
    getRequester() {
        throw new Error("Define a SwaggerRequester.");
    }
};
exports.requestMaker = (operation) => (_input) => {
    const input = Object.assign({}, _input);
    const requester = exports.settings.getRequester();
    const request = requester.paramBuilder(operation, input);
    return requester.handler(request, input, operation);
};
//# sourceMappingURL=api-common.js.map