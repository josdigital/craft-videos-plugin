<?php

/**
 * Dukt Videos
 *
 * @package		Dukt Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */

namespace Blocks;

require_once(DUKT_VIDEOS_PATH.'libraries/ajax.php');

class DuktVideos_AjaxController extends BaseController
{
	/**
	 * Action Endpoint
	 */
    public function actionEndpoint()
    {		
		$ajax = new \DuktVideos\Ajax_blocks();
		
		$method = $_POST['method'];
		
		if($method)
		{
			$ajax->{$method}();
		}
    }
}