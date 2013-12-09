<?php

namespace Craft;

class VideosService extends BaseApplicationComponent
{
    public function config()
    {
        require(CRAFT_PLUGINS_PATH."videos/config.php");

        return $config;
    }

    public function getGatewayOpts($gateway)
    {
        $plugin = craft()->plugins->getPlugin('videos');
        $settings = $plugin->getSettings();

        $gatewayOpts = array(
            'youtube' => array(
                'class' => "YouTube",
                'parameters' => array(
                    'developerKey' => $settings['youtubeParameters']['developerKey']
                ),
            ),
            'vimeo' => array(
                'class' => "Vimeo"
            )
        );

        return $gatewayOpts[$gateway];
    }

    public function getProviderOpts($gateway)
    {
        $providerOpts = array(
            'youtube' => array(
                'handle' => 'google',
                'namespace' => 'videos.google'
            ),
            'vimeo' => array(
                'handle' => 'vimeo',
                'namespace' => 'videos.vimeo'
            )
        );

        return $providerOpts[$gateway];
    }

    public function getVideos($gatewayHandle, $uri, $params = array())
    {
        $providerOpts = $this->getProviderOpts($gatewayHandle);
        $gatewayOpts = $this->getGatewayOpts($gatewayHandle);

        try {
            // provider

            $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

            $provider = craft()->oauth->getProvider($providerOpts['handle']);

            $provider->setToken($token->getDecodedToken());


            // gateway

            $gateway = \Dukt\Videos\Common\ServiceFactory::create($gatewayOpts['class'], $provider->providerSource->_providerSource);

            if(isset($gatewayOpts['parameters'])) {
                $gateway->setParameters($gatewayOpts['parameters']);
            }

            return $gateway->getVideos($uri, $params);

        } catch(\Exception $e) {
            return array('error' => $e->getMessage());
        }
    }

    public function url($videoUrl)
    {
        $gateways = $this->getGateways();

        foreach($gateways as $s)
        {
            $params['url'] = $videoUrl;

            try {

                $video = $s->videoFromUrl($params);

                if($video) {

                    return $video;
                    // $video_object = new Videos_VideoModel($video);

                    // return $video_object;
                }

                //return $video;
            } catch(\Exception $e) {
                //die($e->getMessage());
                //return $e->getMessage();
            }
        }


        return null;
    }

    public function getEmbed($video, $opts)
    {
        $embed = $video->getEmbed($opts);

        $charset = craft()->templates->getTwig()->getCharset();

        return new \Twig_Markup($embed, $charset);
    }

    private function getGateways()
    {
        $wrap = $this;

        $allServices = array_map(

            function($providerClass) use ($wrap) {

                $gatewayHandle = strtolower($providerClass);

                try {
                    // provider

                    $providerOpts = $this->getProviderOpts($gatewayHandle);

                    $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

                    $provider = craft()->oauth->getProvider($providerOpts['handle']);

                    $provider->setToken($token->getDecodedToken());


                    // gateway

                    $gatewayOpts = $this->getGatewayOpts($gatewayHandle);

                    $gateway = \Dukt\Videos\Common\ServiceFactory::create($gatewayOpts['class'], $provider->providerSource->_providerSource);

                    if(isset($gatewayOpts['parameters'])) {
                        $gateway->setParameters($gatewayOpts['parameters']);
                    }

                    return $gateway;

                } catch(\Exception $e) {
                    return array('error' => $e->getMessage());
                }

                // $gateway = \Dukt\Videos\Common\ServiceFactory::create($providerClass);

                // // Retrieve token

                // $gatewayHandle = $gateway->handle;

                // $token = craft()->oauth->getSystemToken($providerOpts['handle'], $providerOpts['namespace']);

                // $provider = craft()->oauth->getProvider($providerOpts['handle']);

                // $provider->setToken($token->getDecodedToken());


                // // refresh token

                // if (isset($token->expires)) {
                //     $remaining = $token->expires - time();

                //     if ($remaining < 240) {
                //         $accessToken = $provider->access($token->refresh_token, array('grant_type' => 'refresh_token'));

                //         // save token

                //         $token->access_token = $accessToken->access_token;
                //         $token->expires = $accessToken->expires;

                //         $gateway->token = $token;
                //     }
                // }


                // // service set provider

                // $gateway->setProvider($provider->providerSOurce);

                // return $gateway;
            },

            \Dukt\Videos\Common\ServiceFactory::find()
        );

        $gateways = array();

        foreach($allServices as $s) {
            array_push($gateways, $s);
        }

        return $gateways;
    }


    public function getGatewaysWithSections()
    {
        try {

            $gateways = $this->getGateways();

            foreach($gateways as $gateway) {

                $class = '\Dukt\Videos\App\\'.$gateway->providerClass;

                $gateway->sections = $class::getSections($gateway);
            }

            return $gateways;
        } catch(\Exception $e) {
            die($e->getMessage());
        }
    }

}