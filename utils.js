module.exports.SUCCESS =  {
            meta: {
                      code: 0,
                      message: "success"
            }
};

module.exports .INVALID_REQUEST =  {
            meta: {
                      code: -10,
                      message: "잘못된 요청입니다."
            }
};

module.exports.toResp = function(meta,data){
          meta.data = data;
          return meta;
}
