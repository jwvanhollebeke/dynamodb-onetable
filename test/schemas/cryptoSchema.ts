/*
    Schema to use with crypto
 */
export default {
    indexes: {
        primary: { hash: 'pk', sort: 'sk' },
    },
    models: {
        User: {
            pk:         { type: String, value: '${_type}#${id}' },
            sk:         { type: String, value: '${_type}#' },
            id:         { type: String, uuid: true },
            name:       { type: String },
            email:      { type: String, crypt: true },
        }
    }
}
