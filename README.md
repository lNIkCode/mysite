# mysite

<html>
  <body>
    <script type='text/javascript'>
    	function initEmbeddedMessaging() {
    		try {
    			embeddedservice_bootstrap.settings.language = 'es'; // For example, enter 'en' or 'en-US'
    
    			embeddedservice_bootstrap.init(
    				'00DO8000000apYf',
    				'CI_ClinicaMessaging',
    				'https://cinternacional1--devproye.sandbox.my.site.com/ESWCIClinicaMessaging1701892368475',
    				{
    					scrt2URL: 'https://cinternacional1--devproye.sandbox.my.salesforce-scrt.com'
    				}
    			);
    		} catch (err) {
    			console.error('Error loading Embedded Messaging: ', err);
    		}
    	};
    </script>
    <script type='text/javascript' src='https://cinternacional1--devproye.sandbox.my.site.com/ESWCIClinicaMessaging1701892368475/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
  </body>
</html>
