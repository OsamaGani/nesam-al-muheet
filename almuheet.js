 $( 'document' ).ready( function () {

            $( '.box1' ).waypoint( function () {
                $( '.box1' ).addClass( 'animate__animated animate__fadeInLeft' )
            }, {
                offset: '50%'
            } )

            $( '.box2' ).waypoint( function () {

                $( '.box2' ).addClass( 'animate__animated animate__fadeInRight' )

            }, {
                offset: '50%'
            } )

            $( '.box3' ).waypoint( function () {
                $( '.box3' ).addClass( 'animate__animated animate__fadeInUp' )
            }, {
                offset: '50%'
            } )
            $( '.contentt' ).waypoint( function () {
                $( '.contentt' ).addClass( 'animate__animated animate__fadeInUp' )
            }, {
                offset: '50%'
            } )
            $( '.aboutt' ).waypoint( function () {
                $( '.aboutt' ).addClass( 'animate__animated animate__fadeInLeft' )
            }, {
                offset: '50%'
            } )
            $( '.img' ).waypoint( function () {
                $( '.img' ).addClass( 'animate__animated animate__fadeInUp' )
            }, {
                offset: '50%'
            } )
            $( '.box8' ).waypoint( function () {
                $( '.box8' ).addClass( 'animate__animated animate__fadeInLeft' )
            }, {
                offset: '50%'
            } )
            // $( '.form' ).waypoint( function () {

            //     $( '.form' ).addClass( 'animate__animated animate__fadeInRight' )

            // }, {
            //     offset: '50%'
            // } )
            // $( '.address' ).waypoint( function () {
            //     $( '.address' ).addClass( 'animate__animated animate__fadeInLeft' )
            // }, {
            //     offset: '50%'
            // } )

        } )

       

        