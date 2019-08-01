<?php

namespace brucebnu\affix;

/**
 * Class AffixAsset
 * @package brucebnu\affix
 * @author Bruce Bnu <bruce.bnu@gmail.com>
 */
class AffixAsset extends \kartik\base\AssetBundle
{
    public function init()
    {
        $this->setSourcePath(__DIR__ . '/assets');
        $this->setupAssets('css', ['css/affix']);
        $this->setupAssets('js', ['js/affix']);
        parent::init();
    }
}
