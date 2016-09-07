//判断设备
define(function(){
　　　　var getUserAgent = function () {
	                        var UserAgentName='';
							var userAgent = navigator.userAgent;
							var ua = window.navigator.userAgent.toLowerCase();
							if (userAgent.indexOf("Android") != -1 || userAgent.indexOf("SAMSUNG") != -1) {
								UserAgentName="Android";
							} else if (userAgent.indexOf("iPhone") != -1 || userAgent.indexOf("iPad") != -1 || userAgent.indexOf("IOS") != -1) {
								UserAgentName="IOS";
							} else if(ua.match(/MicroMessenger/i) == 'micromessenger'){
								UserAgentName="Weixin";
							}else{
								UserAgentName="PcOrUC";
							}
							return UserAgentName;
							
					   };
					   
					   
　　　　return {
　　　　　　getUserAgent: getUserAgent()
　　　　};
});
