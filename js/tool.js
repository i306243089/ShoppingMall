//判断设备
define(function(){
　　　　   getUserAgent = function () {
	                        var UserAgentName='';
							var userAgent = navigator.userAgent;
							var ua = window.navigator.userAgent.toLowerCase();
							if(ua.match(/MicroMessenger/i) == 'micromessenger'){
								UserAgentName="Weixin";
							}else{
								
								if (userAgent.indexOf("Android") != -1 || userAgent.indexOf("SAMSUNG") != -1) {
									UserAgentName="Android";
								} else if (userAgent.indexOf("iPhone") != -1 || userAgent.indexOf("iPad") != -1 || userAgent.indexOf("IOS") != -1) {
									UserAgentName="IOS";
								}else{
								    UserAgentName="PcOrUC";
							    }	
								
							}
							return UserAgentName;
		   };//getUserAgent()
					   
					   
	　　　　return {
	　　　　　　getUserAgent: getUserAgent()
	　　　　};
});
