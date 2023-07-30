sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'trixel/austinrisks/test/integration/FirstJourney',
		'trixel/austinrisks/test/integration/pages/RisksList',
		'trixel/austinrisks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('trixel/austinrisks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);