From: <Saved by Blink>
Snapshot-Content-Location: https://lesscss.org/
Subject: Getting started | Less.js
Date: Mon, 27 Sep 2021 19:16:46 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----"


------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/html
Content-ID: <frame-F18019BBD1EBAAFC74565EF667D1B04A@mhtml.blink>
Content-Transfer-Encoding: binary
Content-Location: https://lesscss.org/

<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" type="text/css" href="cid:css-db69138e-e9cc-4da6-8459-c42b40ecdd6f@mhtml.blink" />
    
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Less extends CSS with dynamic behavior such as variables, mixins, operations and functions. Less runs on both the server-side (with Node.js and Rhino) or client-side (modern browsers only).
">
<meta name="author" content="The Core Less Team">

<title>
  Getting started | Less.js
</title>

<link href="https://fonts.googleapis.com/css?family=Noto+Serif|Oxygen" rel="stylesheet">

<!-- Main styles -->
<link href="https://lesscss.org/public/css/index.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- Favicons -->
<link rel="shortcut icon" href="https://lesscss.org/public/ico/favicon.ico">

  </head>
  <body class="index" style="">

    
      
<div class="docs-header" id="content">
  <div class="container" style="text-align:center">
    <div>
      <img src="https://lesscss.org/public/img/less_logo.png" style="max-width: 264px">
      <h3>It's CSS, with just a little more.</h3>

      <p>Use with Node.js:</p>
      <code>npm install -g less</code><br>
      <code>&gt; lessc styles.less styles.css</code>
      <br><br>
      <p>Or the browser:</p>
      <code>&lt;link rel="stylesheet/less" type="text/css" href="styles.less" /&gt;</code><br>
      <code>&lt;script src="<a href="https://cdn.jsdelivr.net/npm/less@4.1.1">https://cdn.jsdelivr.net/npm/less@4.1.1</a>" &gt;&lt;/script&gt;</code><br>

    </div>
  </div>
</div>


<div class="banner">
  <div class="container">
    View the <a href="https://github.com/less/less.js/blob/master/CHANGELOG.md">Less.js changelog</a>
  </div>
</div>

    
    
    
    <div class="container docs-container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidebar hidden-print" role="complementary">
            <div id="navigation">
  
<ul class="nav sidenav"><li class="active"><a href="https://lesscss.org/#overview">Overview</a></li>
<li class=""><a href="https://lesscss.org/#variables">Variables</a></li>
<li class=""><a href="https://lesscss.org/#mixins">Mixins</a></li>
<li class=""><a href="https://lesscss.org/#nesting">Nesting</a><ul class="nav"><li class=""><a href="https://lesscss.org/#nesting-nested-at-rules-and-bubbling">Nested At-Rules and Bubbling</a></li></ul></li>
<li class=""><a href="https://lesscss.org/#operations">Operations</a><ul class="nav"><li class=""><a href="https://lesscss.org/#operations-calc-exception">calc() exception</a></li></ul></li>
<li class=""><a href="https://lesscss.org/#escaping">Escaping</a></li>
<li class=""><a href="https://lesscss.org/#functions">Functions</a></li>
<li class=""><a href="https://lesscss.org/#namespaces-and-accessors">Namespaces and Accessors</a></li>
<li><a href="https://lesscss.org/#maps">Maps</a></li>
<li><a href="https://lesscss.org/#scope">Scope</a></li>
<li><a href="https://lesscss.org/#comments">Comments</a></li>
<li><a href="https://lesscss.org/#importing">Importing</a></li></ul></div>
<div id="carbonads"><span><span class="carbon-wrap"><a href="https://srv.carbonads.net/ads/click/x/GTND42JICVSIC27LCKBLYKQNCK7I423LC6BI5Z3JCY7ICKQICA7DV53KC6YICKJLF6YI6K7WCKSD423ECKSD653WHEYIKK7LCABIE23ECTNCYBZ52K?segment=placement:lesscssorg;" class="carbon-img" target="_blank" rel="noopener sponsored"><img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" alt="ads via Carbon" border="0" height="100" width="130" style="max-width: 130px;"></a><a href="https://srv.carbonads.net/ads/click/x/GTND42JICVSIC27LCKBLYKQNCK7I423LC6BI5Z3JCY7ICKQICA7DV53KC6YICKJLF6YI6K7WCKSD423ECKSD653WHEYIKK7LCABIE23ECTNCYBZ52K?segment=placement:lesscssorg;" class="carbon-text" target="_blank" rel="noopener sponsored">Limited time offer: Get 10 free Adobe Stock images.</a></span><a href="http://carbonads.net/?utm_source=lesscssorg&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener sponsored">ads via Carbon</a></span></div>
          </div>
        </div>
        <div class="col-md-9" role="main">
          
          <header class="navbar navbar-inverse navbar-fixed-top docs-nav" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
      <ul class="nav navbar-nav">
        
        <li class="active">
          <span>Overview</span>
        </li>
        

        
        <li>
          <a href="https://lesscss.org/usage/">Using Less.js</a>
        </li>
        

        
        <li>
          <a href="https://lesscss.org/functions/">Functions</a>
        </li>
        

        
        <li>
          <a href="https://lesscss.org/features/">In-Depth Guide</a>
        </li>
        

        

        
        <li>
          <a href="https://lesscss.org/tools/">Tools</a>
        </li>
        

       
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
        
        <li class="dropdown">
          <a href="https://lesscss.org/#" class="dropdown-toggle" data-toggle="dropdown">GitHub <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li> <a href="https://github.com/less/less-docs">Docs Repo</a> </li>
            <li> <a href="https://github.com/less/less-docs/issues?&amp;state=open">Docs Issues</a> </li>
            <li class="divider"></li>
            <li> <a href="https://github.com/less/less.js.git">Less Repo</a> </li>
            <li> <a href="https://github.com/less/less.js/issues">Less Issues</a> </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>

          
<div class="panel docs-content">
  



<div class="docs-section">
  <div class="">
    <h1 class="docs-heading"><span class="anchor-target" id="overview"></span>
<a href="https://lesscss.org/#overview" name="overview" class="anchor glyphicon glyphicon-link"></a>Overview</h1>
  </div>
  <blockquote>
<p>Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles.</p>
</blockquote>
<p>Because Less looks just like CSS, learning it is a breeze. Less only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly.</p>
<ul>
<li><em>For detailed documentation on Less language features, see <a href="https://lesscss.org/features/">Features</a></em></li>
<li><em>For a list of Less Built-in functions, see <a href="https://lesscss.org/functions/">Functions</a></em></li>
<li><em>For detailed usage instructions, see <a href="https://lesscss.org/usage/">Using Less.js</a></em></li>
<li><em>For third-party tools for Less, see <a href="https://lesscss.org/tools/">Tools</a></em></li>
</ul>
<p>What does Less add to CSS? Here's a quick overview of features.</p>
<h1 class="docs-heading"><span class="anchor-target" id="variables"></span>
<a href="https://lesscss.org/#variables" name="variables" class="anchor glyphicon glyphicon-link"></a>Variables</h1>
<p>These are pretty self-explanatory:</p>
<pre><code class="lang-less"><span class="hljs-variable">@width:</span> <span class="hljs-number">10px</span>;
<span class="hljs-variable">@height:</span> <span class="hljs-variable">@width</span> + <span class="hljs-number">10px</span>;

<span class="hljs-id">#header</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-variable">@width</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-variable">@height</span>;
}
</code></pre>
<p>Outputs:</p>
<pre><code class="lang-css"><span class="hljs-id">#header</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#variables-feature">Learn More About Variables</a></strong> </p>
<h1 class="docs-heading"><span class="anchor-target" id="mixins"></span>
<a href="https://lesscss.org/#mixins" name="mixins" class="anchor glyphicon glyphicon-link"></a>Mixins</h1>
<p>Mixins are a way of including ("mixing in") a bunch of properties from one rule-set into another rule-set. So say we have the following class:</p>
<pre><code class="lang-css"><span class="hljs-class">.bordered</span> {
  <span class="hljs-attribute">border-top</span>: dotted <span class="hljs-number">1px</span> black;
  <span class="hljs-attribute">border-bottom</span>: solid <span class="hljs-number">2px</span> black;
}
</code></pre>
<p>And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:</p>
<pre><code class="lang-less"><span class="hljs-id">#menu</span> <span class="hljs-tag">a</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-hexcolor">#111</span>;
  <span class="hljs-class">.bordered</span>();
}

<span class="hljs-class">.post</span> <span class="hljs-tag">a</span> {
  <span class="hljs-attribute">color</span>: red;
  <span class="hljs-class">.bordered</span>();
}
</code></pre>
<p>The properties of the <code>.bordered</code> class will now appear in both <code>#menu a</code> and <code>.post a</code>. (Note that you can also use <code>#ids</code> as mixins.)</p>
<p><strong><a href="https://lesscss.org/features/#mixins-feature">Learn More About Mixins</a></strong> </p>
<h1 class="docs-heading"><span class="anchor-target" id="nesting"></span>
<a href="https://lesscss.org/#nesting" name="nesting" class="anchor glyphicon glyphicon-link"></a>Nesting</h1>
<p>Less gives you the ability to use nesting instead of, or in combination with cascading. Let's say we have the following CSS:</p>
<pre><code class="lang-css"><span class="hljs-id">#header</span> {
  <span class="hljs-attribute">color</span>: black;
}
<span class="hljs-id">#header</span> <span class="hljs-class">.navigation</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
}
<span class="hljs-id">#header</span> <span class="hljs-class">.logo</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
}
</code></pre>
<p>In Less, we can also write it this way:</p>
<pre><code class="lang-less"><span class="hljs-id">#header</span> {
  <span class="hljs-attribute">color</span>: black;
  <span class="hljs-class">.navigation</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  }
  <span class="hljs-class">.logo</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  }
}
</code></pre>
<p>The resulting code is more concise, and mimics the structure of your HTML.</p>
<p>You can also bundle pseudo-selectors with your mixins using this method. Here's the classic clearfix hack, rewritten as a mixin (<code>&amp;</code> represents the current selector parent):</p>
<pre><code class="lang-less"><span class="hljs-class">.clearfix</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">zoom</span>: <span class="hljs-number">1</span>;

  <span class="hljs-keyword">&amp;</span><span class="hljs-pseudo">:after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">" "</span>;
    <span class="hljs-attribute">display</span>: block;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">clear</span>: both;
    <span class="hljs-attribute">visibility</span>: hidden;
  }
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#parent-selectors-feature">Learn More About Parent Selectors</a></strong> </p>
<h2 class="docs-heading"><span class="anchor-target" id="nesting-nested-at-rules-and-bubbling"></span>
<a href="https://lesscss.org/#nesting-nested-at-rules-and-bubbling" name="nesting-nested-at-rules-and-bubbling" class="anchor glyphicon glyphicon-link"></a>Nested At-Rules and Bubbling</h2>
<p>At-rules such as <code>@media</code> or <code>@supports</code> can be nested in the same way as selectors. The at-rule is placed on top and relative order against other elements inside the same ruleset remains unchanged. This is called bubbling.</p>
<pre><code class="lang-less"><span class="hljs-class">.component</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
    <span class="hljs-at_rule">@media</span>  (min-resolution: <span class="hljs-number">192dpi</span>) {
      <span class="hljs-attribute">background-image</span>: url(<span class="hljs-string">/img/retina2x.png</span>);
    }
  }
  <span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">1280px</span>) {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">800px</span>;
  }
}

</code></pre>
<p>outputs:</p>
<pre><code class="lang-css"><span class="hljs-class">.component</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
}
<span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) {
  <span class="hljs-class">.component</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;
  }
}
<span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) and (min-resolution: <span class="hljs-number">192dpi</span>) {
  <span class="hljs-class">.component</span> {
    <span class="hljs-attribute">background-image</span>: url(<span class="hljs-string">/img/retina2x.png</span>);
  }
}
<span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">1280px</span>) {
  <span class="hljs-class">.component</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">800px</span>;
  }
}
</code></pre>
<h1 class="docs-heading"><span class="anchor-target" id="operations"></span>
<a href="https://lesscss.org/#operations" name="operations" class="anchor glyphicon glyphicon-link"></a>Operations</h1>
<p>Arithmetical operations <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> can operate on any number, color or variable. If it is possible, mathematical operations take units into account and convert numbers before adding, subtracting or comparing them. The result has leftmost explicitly stated unit type. If the conversion is impossible or not meaningful, units are ignored. Example of impossible conversion: px to cm or rad to %.</p>
<pre><code class="lang-less"><span class="hljs-comment">// numbers are converted into the same units</span>
<span class="hljs-variable">@conversion-1:</span> <span class="hljs-number">5cm</span> + <span class="hljs-number">10mm</span>; <span class="hljs-comment">// result is 6cm</span>
<span class="hljs-variable">@conversion-2:</span> <span class="hljs-number">2</span> - <span class="hljs-number">3cm</span> - <span class="hljs-number">5mm</span>; <span class="hljs-comment">// result is -1.5cm</span>

<span class="hljs-comment">// conversion is impossible</span>
<span class="hljs-variable">@incompatible-units:</span> <span class="hljs-number">2</span> + <span class="hljs-number">5px</span> - <span class="hljs-number">3cm</span>; <span class="hljs-comment">// result is 4px</span>

<span class="hljs-comment">// example with variables</span>
<span class="hljs-variable">@base:</span> <span class="hljs-number">5%</span>;
<span class="hljs-variable">@filler:</span> <span class="hljs-variable">@base</span> * <span class="hljs-number">2</span>; <span class="hljs-comment">// result is 10%</span>
<span class="hljs-variable">@other:</span> <span class="hljs-variable">@base</span> + <span class="hljs-variable">@filler</span>; <span class="hljs-comment">// result is 15%</span>
</code></pre>
<p>Multiplication and division do not convert numbers. It would not be meaningful in most cases - a length multiplied by a length gives an area and css does not support specifying areas. Less will operate on numbers as they are and assign explicitly stated unit type to the result.</p>
<pre><code class="lang-less"><span class="hljs-variable">@base:</span> <span class="hljs-number">2cm</span> * <span class="hljs-number">3mm</span>; <span class="hljs-comment">// result is 6cm</span>
</code></pre>
<p>You can also do arithmetic on colors:</p>
<pre><code class="lang-less"><span class="hljs-variable">@color:</span> <span class="hljs-hexcolor">#224488</span> / <span class="hljs-number">2</span>; <span class="hljs-comment">//results in #112244</span>
<span class="hljs-attribute">background-color</span>: <span class="hljs-hexcolor">#112244</span> + <span class="hljs-hexcolor">#111</span>; <span class="hljs-comment">// result is #223355</span>
</code></pre>
<p>However, you may find Less's <a href="https://lesscss.org/functions/#color-operations">Color Functions</a> more useful.</p>
<h2 class="docs-heading"><span class="anchor-target" id="operations-calc-exception"></span>
<a href="https://lesscss.org/#operations-calc-exception" name="operations-calc-exception" class="anchor glyphicon glyphicon-link"></a>calc() exception</h2>
<p><em>Released <a href="https://github.com/less/less.js/blob/master/CHANGELOG.md">v3.0.0</a></em></p>
<p>For CSS compatibility, <code>calc()</code> does not evaluate math expressions, but will evaluate variables
and math in nested functions.</p>
<pre><code class="lang-less"><span class="hljs-variable">@var:</span> <span class="hljs-number">50vh</span>/<span class="hljs-number">2</span>;
<span class="hljs-attribute">width</span>: <span class="hljs-function">calc</span>(<span class="hljs-number">50%</span> + (<span class="hljs-variable">@var</span> - <span class="hljs-number">20px</span>));  <span class="hljs-comment">// result is calc(50% + (25vh - 20px))</span>
</code></pre>
<h1 class="docs-heading"><span class="anchor-target" id="escaping"></span>
<a href="https://lesscss.org/#escaping" name="escaping" class="anchor glyphicon glyphicon-link"></a>Escaping</h1>
<p>Escaping allows you to use any arbitrary string as property or variable value. Anything inside <code>~"anything"</code> or <code>~'anything'</code> is used as is with no changes except <a href="https://lesscss.org/features/#variables-feature-variable-interpolation">interpolation</a>.</p>
<pre><code class="lang-less"><span class="hljs-variable">@min768:</span> <span class="hljs-string">~"(min-width: 768px)"</span>;
<span class="hljs-class">.element</span> {
  <span class="hljs-at_rule">@media</span> <span class="hljs-variable">@min768</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  }
}
</code></pre>
<p>results in:</p>
<pre><code class="lang-less"><span class="hljs-at_rule">@media</span> (min-width: <span class="hljs-number">768px</span>) {
  <span class="hljs-class">.element</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  }
}
</code></pre>
<p>Note, as of Less 3.5, you can simply write:</p>
<pre><code class="lang-less"><span class="hljs-variable">@min768:</span> (min-width: <span class="hljs-number">768px</span>);
<span class="hljs-class">.element</span> {
  <span class="hljs-at_rule">@media</span> <span class="hljs-variable">@min768</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  }
}
</code></pre>
<p>In 3.5+, many cases previously requiring "quote-escaping" are not needed.</p>
<h1 class="docs-heading"><span class="anchor-target" id="functions"></span>
<a href="https://lesscss.org/#functions" name="functions" class="anchor glyphicon glyphicon-link"></a>Functions</h1>
<p>Less provides a variety of functions which transform colors, manipulate strings and do maths. They are documented fully in the <a href="https://lesscss.org/functions/">function reference</a>.</p>
<p>Using them is pretty straightforward. The following example uses percentage to convert 0.5 to 50%, increases the saturation of a base color by 5% and then sets the background color to one that is lightened by 25% and spun by 8 degrees:</p>
<pre><code class="lang-less"><span class="hljs-variable">@base:</span> <span class="hljs-hexcolor">#f04615</span>;
<span class="hljs-variable">@width:</span> <span class="hljs-number">0.5</span>;

<span class="hljs-class">.class</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-function">percentage</span>(<span class="hljs-variable">@width</span>); <span class="hljs-comment">// returns `50%`</span>
  <span class="hljs-attribute">color</span>: <span class="hljs-function">saturate</span>(<span class="hljs-variable">@base</span>, <span class="hljs-number">5%</span>);
  <span class="hljs-attribute">background-color</span>: <span class="hljs-function">spin</span>(<span class="hljs-function">lighten</span>(<span class="hljs-variable">@base</span>, <span class="hljs-number">25%</span>), <span class="hljs-number">8</span>);
}
</code></pre>
<p><strong><a href="https://lesscss.org/functions/">See: Function Reference</a></strong> </p>
<h1 class="docs-heading"><span class="anchor-target" id="namespaces-and-accessors"></span>
<a href="https://lesscss.org/#namespaces-and-accessors" name="namespaces-and-accessors" class="anchor glyphicon glyphicon-link"></a>Namespaces and Accessors</h1>
<p>(Not to be confused with <a href="http://www.w3.org/TR/css3-namespace/">CSS <code>@namespace</code></a> or <a href="http://www.w3.org/TR/css3-selectors/#typenmsp">namespace selectors</a>).</p>
<p>Sometimes, you may want to group your mixins, for organizational purposes, or just to offer some encapsulation. You can do this pretty intuitively in Less. Say you want to bundle some mixins and variables under <code>#bundle</code>, for later reuse or distributing:</p>
<pre><code class="lang-less"><span class="hljs-id">#bundle</span>() {
  <span class="hljs-class">.button</span> {
    <span class="hljs-attribute">display</span>: block;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid black;
    <span class="hljs-attribute">background-color</span>: grey;
    <span class="hljs-keyword">&amp;</span><span class="hljs-pseudo">:hover</span> {
      <span class="hljs-attribute">background-color</span>: white;
    }
  }
  <span class="hljs-class">.tab</span> { ... }
  <span class="hljs-class">.citation</span> { ... }
}
</code></pre>
<p>Now if we want to mixin the <code>.button</code> class in our <code>#header a</code>, we can do:</p>
<pre><code class="lang-less"><span class="hljs-id">#header</span> <span class="hljs-tag">a</span> {
  <span class="hljs-attribute">color</span>: orange;
  <span class="hljs-id">#bundle</span><span class="hljs-class">.button</span>();  <span class="hljs-comment">// can also be written as #bundle &gt; .button</span>
}
</code></pre>
<p>Note: append <code>()</code> to your namespace (e.g. <code>#bundle()</code>) if you don't want it to appear in your CSS output i.e. <code>#bundle .tab</code>.</p>
<h1 class="docs-heading"><span class="anchor-target" id="maps"></span>
<a href="https://lesscss.org/#maps" name="maps" class="anchor glyphicon glyphicon-link"></a>Maps</h1>
<p>As of Less 3.5, you can also use mixins and rulesets as maps of values.</p>
<pre><code class="lang-less"><span class="hljs-id">#colors</span>() {
  <span class="hljs-attribute">primary</span>: blue;
  <span class="hljs-attribute">secondary</span>: green;
}

<span class="hljs-class">.button</span> {
  <span class="hljs-attribute">color</span>: #colors[primary];
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid #colors[secondary];
}
</code></pre>
<p>This outputs, as expected:</p>
<pre><code class="lang-css"><span class="hljs-class">.button</span> {
  <span class="hljs-attribute">color</span>: blue;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid green;
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#maps-feature">See also: Maps</a></strong></p>
<h1 class="docs-heading"><span class="anchor-target" id="scope"></span>
<a href="https://lesscss.org/#scope" name="scope" class="anchor glyphicon glyphicon-link"></a>Scope</h1>
<p>Scope in Less is very similar to that of CSS. Variables and mixins are first looked for locally, and if they aren't found, it's inherited from the "parent" scope.</p>
<pre><code class="lang-less"><span class="hljs-variable">@var:</span> red;

<span class="hljs-id">#page</span> {
  <span class="hljs-variable">@var:</span> white;
  <span class="hljs-id">#header</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-variable">@var</span>; <span class="hljs-comment">// white</span>
  }
}
</code></pre>
<p>Like CSS custom properties, mixin and variable definitions do not have to be placed before a line where they are referenced. So the following Less code is identical to the previous example:</p>
<pre><code class="lang-less"><span class="hljs-variable">@var:</span> red;

<span class="hljs-id">#page</span> {
  <span class="hljs-id">#header</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-variable">@var</span>; <span class="hljs-comment">// white</span>
  }
  <span class="hljs-variable">@var:</span> white;
}
</code></pre>
<p><strong><a href="https://lesscss.org/features/#variables-feature-lazy-loading">See also: Lazy Loading</a></strong></p>
<h1 class="docs-heading"><span class="anchor-target" id="comments"></span>
<a href="https://lesscss.org/#comments" name="comments" class="anchor glyphicon glyphicon-link"></a>Comments</h1>
<p>Both block-style and inline comments may be used:</p>
<pre><code class="lang-less"><span class="hljs-comment">/* One heck of a block
 * style comment! */</span>
<span class="hljs-variable">@var:</span> red;

<span class="hljs-comment">// Get in line!</span>
<span class="hljs-variable">@var:</span> white;
</code></pre>
<h1 class="docs-heading"><span class="anchor-target" id="importing"></span>
<a href="https://lesscss.org/#importing" name="importing" class="anchor glyphicon glyphicon-link"></a>Importing</h1>
<p>Importing works pretty much as expected. You can import a <code>.less</code> file, and all the variables in it will be available. The extension is optionally specified for <code>.less</code> files.</p>
<pre><code class="lang-css"><span class="hljs-at_rule">@import</span> <span class="hljs-string">"library"</span>; <span class="hljs-comment">// library.less</span>
<span class="hljs-at_rule">@import</span> <span class="hljs-string">"typo.css"</span>;
</code></pre>
<p><strong><a href="https://lesscss.org/features/#imports-feature">Learn More About Imports</a></strong> </p>

</div>



</div>
        </div>
      </div>
    </div>

    
    <footer class="footer" role="contentinfo">
  <div class="container">
    <div class="bs-social">
  <ul class="bs-social-buttons">
    <li>
      <iframe class="github-btn" src="cid:frame-BCD39C632527B9B045E1BBBE5AD1F458@mhtml.blink" width="100" height="20" title="Star on GitHub"></iframe>
    </li>
    <li>
      <iframe class="github-btn" src="cid:frame-693701378F0C5455B2D9CC01FCFFD84C@mhtml.blink" width="102" height="20" title="Fork on GitHub"></iframe>
    </li>
  </ul>
</div>

    <p>Less and these docs are maintained by <a href="https://lesscss.org/about/#team">the core Less team</a>.</p>
    <p>Documentation source code released under the <a href="https://github.com/less/less-docs/blob/master/LICENSE-MIT" target="_blank">MIT License</a>, documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.</p>
    <ul class="footer-links">
      <li>Currently v4.1.1</li>
      
      <li class="muted">Â·</li>
      <li><a href="https://github.com/less/less.js/issues">Less Language and Compiler Issues</a></li>
      <li class="muted">Â·</li>
      <li><a href="https://github.com/less/less-docs/issues?&amp;state=open">Less Docs Issues</a></li>
      <li class="muted">Â·</li>
      <li><a href="https://github.com/less/less.js/blob/master/CHANGELOG.md">Changelog</a></li>
      
    </ul>
  </div>
</footer>


    
    <!-- Core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->










  

</body></html>
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/css
Content-Transfer-Encoding: binary
Content-Location: cid:css-db69138e-e9cc-4da6-8459-c42b40ecdd6f@mhtml.blink

@charset "utf-8";


------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/css
Content-Transfer-Encoding: binary
Content-Location: https://fonts.googleapis.com/css?family=Noto+Serif|Oxygen

@charset "utf-8";

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFoWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFMWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+400-45F, U+490-491, U+4B0-4B1, U+2116; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFsWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+1F00-1FFF; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFQWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+370-3FF; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFgWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+1EA0-1EF9, U+20AB; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFkWaDq8fMVxMw.woff2") format("woff2"); unicode-range: U+100-24F, U+259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }

@font-face { font-family: "Noto Serif"; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/notoserif/v16/ga6Iaw1J5X9T9RW6j9bNfFcWaDq8fMU.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }

@font-face { font-family: Oxygen; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/oxygen/v10/2sDfZG1Wl4LcnbuKgE0mRUe0A4Uc.woff2") format("woff2"); unicode-range: U+100-24F, U+259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }

@font-face { font-family: Oxygen; font-style: normal; font-weight: 400; src: url("https://fonts.gstatic.com/s/oxygen/v10/2sDfZG1Wl4LcnbuKjk0mRUe0Aw.woff2") format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/css
Content-Transfer-Encoding: binary
Content-Location: https://lesscss.org/public/css/index.css

@charset "utf-8";

article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary { display: block; }

audio, canvas, video { display: inline-block; }

audio:not([controls]) { display: none; height: 0px; }

[hidden], template { display: none; }

html { font-family: sans-serif; text-size-adjust: 100%; }

body { margin: 0px; }

a { background: transparent; }

a:focus { outline: dotted thin; }

a:active, a:hover { outline: 0px; }

h1 { font-size: 2em; margin: 0.67em 0px; }

abbr[title] { border-bottom: 1px dotted; }

b, strong { font-weight: bold; }

dfn { font-style: italic; }

hr { box-sizing: content-box; height: 0px; }

mark { background: rgb(255, 255, 0); color: rgb(0, 0, 0); }

code, kbd, pre, samp { font-family: monospace, serif; font-size: 1em; }

pre { white-space: pre-wrap; }

q { quotes: "â€œ" "â€" "â€˜" "â€™"; }

small { font-size: 80%; }

sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }

sup { top: -0.5em; }

sub { bottom: -0.25em; }

img { border: 0px; }

svg:not(:root) { overflow: hidden; }

figure { margin: 0px; }

fieldset { border: 1px solid rgb(192, 192, 192); margin: 0px 2px; padding: 0.35em 0.625em 0.75em; }

legend { border: 0px; padding: 0px; }

button, input, select, textarea { font-family: inherit; font-size: 100%; margin: 0px; }

button, input { line-height: normal; }

button, select { text-transform: none; }

button, html input[type="button"], input[type="reset"], input[type="submit"] { appearance: button; cursor: pointer; }

button[disabled], html input[disabled] { cursor: default; }

input[type="checkbox"], input[type="radio"] { box-sizing: border-box; padding: 0px; }

input[type="search"] { appearance: textfield; box-sizing: content-box; }

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { appearance: none; }

textarea { overflow: auto; vertical-align: top; }

table { border-collapse: collapse; border-spacing: 0px; }

@media print {
  * { text-shadow: none !important; color: rgb(0, 0, 0) !important; background: transparent !important; box-shadow: none !important; }
  a, a:visited { text-decoration: underline; }
  a[href]::after { content: " (" attr(href) ")"; }
  abbr[title]::after { content: " (" attr(title) ")"; }
  .ir a::after, a[href^="javascript:"]::after, a[href^="#"]::after { content: ""; }
  pre, blockquote { border: 1px solid rgb(153, 153, 153); break-inside: avoid; }
  thead { display: table-header-group; }
  tr, img { break-inside: avoid; }
  img { max-width: 100% !important; }
  @page { margin: 2cm 0.5cm; }
  p, h2, h3 { orphans: 3; widows: 3; }
  h2, h3 { break-after: avoid; }
  .navbar { display: none; }
  .table td, .table th { background-color: rgb(255, 255, 255) !important; }
  .btn > .caret, .dropup > .btn > .caret { border-top-color: rgb(0, 0, 0) !important; }
  .label { border: 1px solid rgb(0, 0, 0); }
  .table { border-collapse: collapse !important; }
  .table-bordered th, .table-bordered td { border: 1px solid rgb(221, 221, 221) !important; }
}

p { margin: 0px 0px 10px; }

small, .small { font-size: 85%; }

cite { font-style: normal; }

.text-muted { color: rgb(153, 153, 153); }

.text-primary { color: rgb(66, 139, 202); }

.text-primary:hover { color: rgb(48, 113, 169); }

.text-warning { color: rgb(192, 152, 83); }

.text-warning:hover { color: rgb(164, 126, 60); }

.text-danger { color: rgb(185, 74, 72); }

.text-danger:hover { color: rgb(149, 59, 57); }

.text-success { color: rgb(70, 136, 71); }

.text-success:hover { color: rgb(53, 102, 53); }

.text-info { color: rgb(58, 135, 173); }

.text-info:hover { color: rgb(45, 105, 135); }

.text-left { text-align: left; }

.text-right { text-align: right; }

.text-center { text-align: center; }

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 { font-family: Oxygen, "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 500; line-height: 1.1; color: rgb(29, 54, 93); }

h1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small { font-weight: normal; line-height: 1; color: rgb(153, 153, 153); }

h1, h2, h3 { margin-top: 20px; margin-bottom: 10px; }

h1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small { font-size: 65%; }

h4, h5, h6 { margin-top: 10px; margin-bottom: 10px; }

h4 small, h5 small, h6 small, h4 .small, h5 .small, h6 .small { font-size: 75%; }

h1, .h1 { font-size: 35px; }

h2, .h2 { font-size: 28px; }

h3, .h3 { font-size: 25px; }

h4, .h4 { font-size: 21px; }

h5, .h5 { font-size: 14px; }

h6, .h6 { font-size: 12px; }

.page-header { padding-bottom: 9px; margin: 40px 0px 20px; border-bottom: 1px solid rgb(238, 238, 238); }

ul, ol { margin-top: 0px; margin-bottom: 10px; }

ul ul, ol ul, ul ol, ol ol { margin-bottom: 0px; }

.list-unstyled { padding-left: 0px; list-style: none; }

.list-inline { padding-left: 0px; list-style: none; }

.list-inline > li { display: inline-block; padding-left: 5px; padding-right: 5px; }

dl { margin-bottom: 20px; }

dt, dd { line-height: 1.42857; }

dt { font-weight: bold; }

dd { margin-left: 0px; }

@media (min-width: 768px) {
  .dl-horizontal dt { float: left; width: 160px; clear: left; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dl-horizontal dd { margin-left: 180px; }
  .dl-horizontal dd::before, .dl-horizontal dd::after { content: " "; display: table; }
  .dl-horizontal dd::after { clear: both; }
  .dl-horizontal dd::before, .dl-horizontal dd::after { content: " "; display: table; }
  .dl-horizontal dd::after { clear: both; }
}

abbr[title], abbr[data-original-title] { cursor: help; border-bottom: 1px dotted rgb(153, 153, 153); }

abbr.initialism { font-size: 90%; text-transform: uppercase; }

blockquote { padding: 10px 20px; margin: 0px 0px 20px; border-left: 4px solid rgb(238, 238, 238); }

blockquote p { color: rgb(122, 122, 122); font-weight: 300; line-height: 1.25; }

blockquote p:last-child { margin-bottom: 0px; }

blockquote small { display: block; line-height: 1.42857; color: rgb(153, 153, 153); }

blockquote small::before { content: "â€”Â "; }

blockquote.pull-right { padding-right: 15px; padding-left: 0px; border-right: 5px solid rgb(238, 238, 238); border-left: 0px; }

blockquote.pull-right p, blockquote.pull-right small, blockquote.pull-right .small { text-align: right; }

blockquote.pull-right small::before, blockquote.pull-right .small::before { content: ""; }

blockquote.pull-right small::after, blockquote.pull-right .small::after { content: "Â â€”"; }

blockquote::before, blockquote::after { content: ""; }

address { margin-bottom: 20px; font-style: normal; line-height: 1.42857; }

code, kbd, pre, samp { font-family: Monaco, Menlo, Consolas, "Courier New", monospace; }

code { padding: 2px 4px; font-size: 90%; color: rgb(66, 139, 202); background-color: rgb(245, 245, 245); white-space: nowrap; border-radius: 4px; }

pre { display: block; padding: 9.5px; margin: 0px 0px 10px; font-size: 13px; line-height: 1.42857; word-break: break-all; overflow-wrap: break-word; color: rgb(51, 51, 51); background-color: rgb(245, 245, 245); border: 1px solid rgb(204, 204, 204); border-radius: 4px; }

pre code { padding: 0px; font-size: inherit; color: inherit; white-space: pre-wrap; background-color: transparent; border-radius: 0px; }

.pre-scrollable { max-height: 340px; overflow-y: scroll; }

.container { margin-right: auto; margin-left: auto; padding-left: 15px; padding-right: 15px; }

.container::before, .container::after { content: " "; display: table; }

.container::after { clear: both; }

.container::before, .container::after { content: " "; display: table; }

.container::after { clear: both; }

.row { margin-left: -15px; margin-right: -15px; }

.row::before, .row::after { content: " "; display: table; }

.row::after { clear: both; }

.row::before, .row::after { content: " "; display: table; }

.row::after { clear: both; }

.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 { position: relative; min-height: 1px; padding-left: 15px; padding-right: 15px; }

.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11 { float: left; }

.col-xs-12 { width: 100%; }

.col-xs-11 { width: 91.6667%; }

.col-xs-10 { width: 83.3333%; }

.col-xs-9 { width: 75%; }

.col-xs-8 { width: 66.6667%; }

.col-xs-7 { width: 58.3333%; }

.col-xs-6 { width: 50%; }

.col-xs-5 { width: 41.6667%; }

.col-xs-4 { width: 33.3333%; }

.col-xs-3 { width: 25%; }

.col-xs-2 { width: 16.6667%; }

.col-xs-1 { width: 8.33333%; }

.col-xs-pull-12 { right: 100%; }

.col-xs-pull-11 { right: 91.6667%; }

.col-xs-pull-10 { right: 83.3333%; }

.col-xs-pull-9 { right: 75%; }

.col-xs-pull-8 { right: 66.6667%; }

.col-xs-pull-7 { right: 58.3333%; }

.col-xs-pull-6 { right: 50%; }

.col-xs-pull-5 { right: 41.6667%; }

.col-xs-pull-4 { right: 33.3333%; }

.col-xs-pull-3 { right: 25%; }

.col-xs-pull-2 { right: 16.6667%; }

.col-xs-pull-1 { right: 8.33333%; }

.col-xs-push-12 { left: 100%; }

.col-xs-push-11 { left: 91.6667%; }

.col-xs-push-10 { left: 83.3333%; }

.col-xs-push-9 { left: 75%; }

.col-xs-push-8 { left: 66.6667%; }

.col-xs-push-7 { left: 58.3333%; }

.col-xs-push-6 { left: 50%; }

.col-xs-push-5 { left: 41.6667%; }

.col-xs-push-4 { left: 33.3333%; }

.col-xs-push-3 { left: 25%; }

.col-xs-push-2 { left: 16.6667%; }

.col-xs-push-1 { left: 8.33333%; }

.col-xs-offset-12 { margin-left: 100%; }

.col-xs-offset-11 { margin-left: 91.6667%; }

.col-xs-offset-10 { margin-left: 83.3333%; }

.col-xs-offset-9 { margin-left: 75%; }

.col-xs-offset-8 { margin-left: 66.6667%; }

.col-xs-offset-7 { margin-left: 58.3333%; }

.col-xs-offset-6 { margin-left: 50%; }

.col-xs-offset-5 { margin-left: 41.6667%; }

.col-xs-offset-4 { margin-left: 33.3333%; }

.col-xs-offset-3 { margin-left: 25%; }

.col-xs-offset-2 { margin-left: 16.6667%; }

.col-xs-offset-1 { margin-left: 8.33333%; }

@media (min-width: 768px) {
  .container { width: 750px; }
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11 { float: left; }
  .col-sm-12 { width: 100%; }
  .col-sm-11 { width: 91.6667%; }
  .col-sm-10 { width: 83.3333%; }
  .col-sm-9 { width: 75%; }
  .col-sm-8 { width: 66.6667%; }
  .col-sm-7 { width: 58.3333%; }
  .col-sm-6 { width: 50%; }
  .col-sm-5 { width: 41.6667%; }
  .col-sm-4 { width: 33.3333%; }
  .col-sm-3 { width: 25%; }
  .col-sm-2 { width: 16.6667%; }
  .col-sm-1 { width: 8.33333%; }
  .col-sm-pull-12 { right: 100%; }
  .col-sm-pull-11 { right: 91.6667%; }
  .col-sm-pull-10 { right: 83.3333%; }
  .col-sm-pull-9 { right: 75%; }
  .col-sm-pull-8 { right: 66.6667%; }
  .col-sm-pull-7 { right: 58.3333%; }
  .col-sm-pull-6 { right: 50%; }
  .col-sm-pull-5 { right: 41.6667%; }
  .col-sm-pull-4 { right: 33.3333%; }
  .col-sm-pull-3 { right: 25%; }
  .col-sm-pull-2 { right: 16.6667%; }
  .col-sm-pull-1 { right: 8.33333%; }
  .col-sm-push-12 { left: 100%; }
  .col-sm-push-11 { left: 91.6667%; }
  .col-sm-push-10 { left: 83.3333%; }
  .col-sm-push-9 { left: 75%; }
  .col-sm-push-8 { left: 66.6667%; }
  .col-sm-push-7 { left: 58.3333%; }
  .col-sm-push-6 { left: 50%; }
  .col-sm-push-5 { left: 41.6667%; }
  .col-sm-push-4 { left: 33.3333%; }
  .col-sm-push-3 { left: 25%; }
  .col-sm-push-2 { left: 16.6667%; }
  .col-sm-push-1 { left: 8.33333%; }
  .col-sm-offset-12 { margin-left: 100%; }
  .col-sm-offset-11 { margin-left: 91.6667%; }
  .col-sm-offset-10 { margin-left: 83.3333%; }
  .col-sm-offset-9 { margin-left: 75%; }
  .col-sm-offset-8 { margin-left: 66.6667%; }
  .col-sm-offset-7 { margin-left: 58.3333%; }
  .col-sm-offset-6 { margin-left: 50%; }
  .col-sm-offset-5 { margin-left: 41.6667%; }
  .col-sm-offset-4 { margin-left: 33.3333%; }
  .col-sm-offset-3 { margin-left: 25%; }
  .col-sm-offset-2 { margin-left: 16.6667%; }
  .col-sm-offset-1 { margin-left: 8.33333%; }
}

@media (min-width: 992px) {
  .container { width: 970px; }
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11 { float: left; }
  .col-md-12 { width: 100%; }
  .col-md-11 { width: 91.6667%; }
  .col-md-10 { width: 83.3333%; }
  .col-md-9 { width: 75%; }
  .col-md-8 { width: 66.6667%; }
  .col-md-7 { width: 58.3333%; }
  .col-md-6 { width: 50%; }
  .col-md-5 { width: 41.6667%; }
  .col-md-4 { width: 33.3333%; }
  .col-md-3 { width: 25%; }
  .col-md-2 { width: 16.6667%; }
  .col-md-1 { width: 8.33333%; }
  .col-md-pull-12 { right: 100%; }
  .col-md-pull-11 { right: 91.6667%; }
  .col-md-pull-10 { right: 83.3333%; }
  .col-md-pull-9 { right: 75%; }
  .col-md-pull-8 { right: 66.6667%; }
  .col-md-pull-7 { right: 58.3333%; }
  .col-md-pull-6 { right: 50%; }
  .col-md-pull-5 { right: 41.6667%; }
  .col-md-pull-4 { right: 33.3333%; }
  .col-md-pull-3 { right: 25%; }
  .col-md-pull-2 { right: 16.6667%; }
  .col-md-pull-1 { right: 8.33333%; }
  .col-md-push-12 { left: 100%; }
  .col-md-push-11 { left: 91.6667%; }
  .col-md-push-10 { left: 83.3333%; }
  .col-md-push-9 { left: 75%; }
  .col-md-push-8 { left: 66.6667%; }
  .col-md-push-7 { left: 58.3333%; }
  .col-md-push-6 { left: 50%; }
  .col-md-push-5 { left: 41.6667%; }
  .col-md-push-4 { left: 33.3333%; }
  .col-md-push-3 { left: 25%; }
  .col-md-push-2 { left: 16.6667%; }
  .col-md-push-1 { left: 8.33333%; }
  .col-md-offset-12 { margin-left: 100%; }
  .col-md-offset-11 { margin-left: 91.6667%; }
  .col-md-offset-10 { margin-left: 83.3333%; }
  .col-md-offset-9 { margin-left: 75%; }
  .col-md-offset-8 { margin-left: 66.6667%; }
  .col-md-offset-7 { margin-left: 58.3333%; }
  .col-md-offset-6 { margin-left: 50%; }
  .col-md-offset-5 { margin-left: 41.6667%; }
  .col-md-offset-4 { margin-left: 33.3333%; }
  .col-md-offset-3 { margin-left: 25%; }
  .col-md-offset-2 { margin-left: 16.6667%; }
  .col-md-offset-1 { margin-left: 8.33333%; }
}

@media (min-width: 1200px) {
  .container { width: 1170px; }
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11 { float: left; }
  .col-lg-12 { width: 100%; }
  .col-lg-11 { width: 91.6667%; }
  .col-lg-10 { width: 83.3333%; }
  .col-lg-9 { width: 75%; }
  .col-lg-8 { width: 66.6667%; }
  .col-lg-7 { width: 58.3333%; }
  .col-lg-6 { width: 50%; }
  .col-lg-5 { width: 41.6667%; }
  .col-lg-4 { width: 33.3333%; }
  .col-lg-3 { width: 25%; }
  .col-lg-2 { width: 16.6667%; }
  .col-lg-1 { width: 8.33333%; }
  .col-lg-pull-12 { right: 100%; }
  .col-lg-pull-11 { right: 91.6667%; }
  .col-lg-pull-10 { right: 83.3333%; }
  .col-lg-pull-9 { right: 75%; }
  .col-lg-pull-8 { right: 66.6667%; }
  .col-lg-pull-7 { right: 58.3333%; }
  .col-lg-pull-6 { right: 50%; }
  .col-lg-pull-5 { right: 41.6667%; }
  .col-lg-pull-4 { right: 33.3333%; }
  .col-lg-pull-3 { right: 25%; }
  .col-lg-pull-2 { right: 16.6667%; }
  .col-lg-pull-1 { right: 8.33333%; }
  .col-lg-push-12 { left: 100%; }
  .col-lg-push-11 { left: 91.6667%; }
  .col-lg-push-10 { left: 83.3333%; }
  .col-lg-push-9 { left: 75%; }
  .col-lg-push-8 { left: 66.6667%; }
  .col-lg-push-7 { left: 58.3333%; }
  .col-lg-push-6 { left: 50%; }
  .col-lg-push-5 { left: 41.6667%; }
  .col-lg-push-4 { left: 33.3333%; }
  .col-lg-push-3 { left: 25%; }
  .col-lg-push-2 { left: 16.6667%; }
  .col-lg-push-1 { left: 8.33333%; }
  .col-lg-offset-12 { margin-left: 100%; }
  .col-lg-offset-11 { margin-left: 91.6667%; }
  .col-lg-offset-10 { margin-left: 83.3333%; }
  .col-lg-offset-9 { margin-left: 75%; }
  .col-lg-offset-8 { margin-left: 66.6667%; }
  .col-lg-offset-7 { margin-left: 58.3333%; }
  .col-lg-offset-6 { margin-left: 50%; }
  .col-lg-offset-5 { margin-left: 41.6667%; }
  .col-lg-offset-4 { margin-left: 33.3333%; }
  .col-lg-offset-3 { margin-left: 25%; }
  .col-lg-offset-2 { margin-left: 16.6667%; }
  .col-lg-offset-1 { margin-left: 8.33333%; }
}

table { max-width: 100%; background-color: transparent; }

th { text-align: left; }

.table { width: 100%; margin-bottom: 20px; }

.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td { padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); }

.table > thead > tr > th { vertical-align: bottom; border-bottom: 2px solid rgb(221, 221, 221); }

.table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > th, .table > caption + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > td, .table > thead:first-child > tr:first-child > td { border-top: 0px; }

.table > tbody + tbody { border-top: 2px solid rgb(221, 221, 221); }

.table .table { background-color: rgb(247, 247, 247); }

.table-condensed > thead > tr > th, .table-condensed > tbody > tr > th, .table-condensed > tfoot > tr > th, .table-condensed > thead > tr > td, .table-condensed > tbody > tr > td, .table-condensed > tfoot > tr > td { padding: 5px; }

.table-bordered { border: 1px solid rgb(221, 221, 221); }

.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td { border: 1px solid rgb(221, 221, 221); }

.table-bordered > thead > tr > th, .table-bordered > thead > tr > td { border-bottom-width: 2px; }

.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th { background-color: rgb(249, 249, 249); }

.table-hover > tbody > tr:hover > td, .table-hover > tbody > tr:hover > th { background-color: rgb(245, 245, 245); }

table col[class*="col-"] { float: none; display: table-column; }

table td[class*="col-"], table th[class*="col-"] { float: none; display: table-cell; }

.table > thead > tr > td.active, .table > tbody > tr > td.active, .table > tfoot > tr > td.active, .table > thead > tr > th.active, .table > tbody > tr > th.active, .table > tfoot > tr > th.active, .table > thead > tr.active > td, .table > tbody > tr.active > td, .table > tfoot > tr.active > td, .table > thead > tr.active > th, .table > tbody > tr.active > th, .table > tfoot > tr.active > th { background-color: rgb(245, 245, 245); }

.table > thead > tr > td.success, .table > tbody > tr > td.success, .table > tfoot > tr > td.success, .table > thead > tr > th.success, .table > tbody > tr > th.success, .table > tfoot > tr > th.success, .table > thead > tr.success > td, .table > tbody > tr.success > td, .table > tfoot > tr.success > td, .table > thead > tr.success > th, .table > tbody > tr.success > th, .table > tfoot > tr.success > th { background-color: rgb(223, 240, 216); border-color: rgb(214, 233, 198); }

.table-hover > tbody > tr > td.success:hover, .table-hover > tbody > tr > th.success:hover, .table-hover > tbody > tr.success:hover > td, .table-hover > tbody > tr.success:hover > th { background-color: rgb(208, 233, 198); border-color: rgb(201, 226, 179); }

.table > thead > tr > td.danger, .table > tbody > tr > td.danger, .table > tfoot > tr > td.danger, .table > thead > tr > th.danger, .table > tbody > tr > th.danger, .table > tfoot > tr > th.danger, .table > thead > tr.danger > td, .table > tbody > tr.danger > td, .table > tfoot > tr.danger > td, .table > thead > tr.danger > th, .table > tbody > tr.danger > th, .table > tfoot > tr.danger > th { background-color: rgb(242, 222, 222); border-color: rgb(235, 204, 209); }

.table-hover > tbody > tr > td.danger:hover, .table-hover > tbody > tr > th.danger:hover, .table-hover > tbody > tr.danger:hover > td, .table-hover > tbody > tr.danger:hover > th { background-color: rgb(235, 204, 204); border-color: rgb(228, 185, 192); }

.table > thead > tr > td.warning, .table > tbody > tr > td.warning, .table > tfoot > tr > td.warning, .table > thead > tr > th.warning, .table > tbody > tr > th.warning, .table > tfoot > tr > th.warning, .table > thead > tr.warning > td, .table > tbody > tr.warning > td, .table > tfoot > tr.warning > td, .table > thead > tr.warning > th, .table > tbody > tr.warning > th, .table > tfoot > tr.warning > th { background-color: rgb(252, 248, 227); border-color: rgb(250, 235, 204); }

.table-hover > tbody > tr > td.warning:hover, .table-hover > tbody > tr > th.warning:hover, .table-hover > tbody > tr.warning:hover > td, .table-hover > tbody > tr.warning:hover > th { background-color: rgb(250, 242, 204); border-color: rgb(247, 225, 181); }

@media (max-width: 767px) {
  .table-responsive { width: 100%; margin-bottom: 15px; overflow: scroll hidden; border: 1px solid rgb(221, 221, 221); }
  .table-responsive > .table { margin-bottom: 0px; }
  .table-responsive > .table > thead > tr > th, .table-responsive > .table > tbody > tr > th, .table-responsive > .table > tfoot > tr > th, .table-responsive > .table > thead > tr > td, .table-responsive > .table > tbody > tr > td, .table-responsive > .table > tfoot > tr > td { white-space: nowrap; }
  .table-responsive > .table-bordered { border: 0px; }
  .table-responsive > .table-bordered > thead > tr > th:first-child, .table-responsive > .table-bordered > tbody > tr > th:first-child, .table-responsive > .table-bordered > tfoot > tr > th:first-child, .table-responsive > .table-bordered > thead > tr > td:first-child, .table-responsive > .table-bordered > tbody > tr > td:first-child, .table-responsive > .table-bordered > tfoot > tr > td:first-child { border-left: 0px; }
  .table-responsive > .table-bordered > thead > tr > th:last-child, .table-responsive > .table-bordered > tbody > tr > th:last-child, .table-responsive > .table-bordered > tfoot > tr > th:last-child, .table-responsive > .table-bordered > thead > tr > td:last-child, .table-responsive > .table-bordered > tbody > tr > td:last-child, .table-responsive > .table-bordered > tfoot > tr > td:last-child { border-right: 0px; }
  .table-responsive > .table-bordered > tbody > tr:last-child > th, .table-responsive > .table-bordered > tfoot > tr:last-child > th, .table-responsive > .table-bordered > tbody > tr:last-child > td, .table-responsive > .table-bordered > tfoot > tr:last-child > td { border-bottom: 0px; }
}

fieldset { padding: 0px; margin: 0px; border: 0px; }

legend { display: block; width: 100%; padding: 0px; margin-bottom: 20px; font-size: 21px; line-height: inherit; color: rgb(51, 51, 51); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-left-color: initial; border-image: initial; border-bottom-style: solid; border-bottom-color: rgb(229, 229, 229); }

label { display: inline-block; margin-bottom: 5px; font-weight: bold; }

input[type="search"] { box-sizing: border-box; }

input[type="radio"], input[type="checkbox"] { margin: 4px 0px 0px; line-height: normal; }

input[type="file"] { display: block; }

select[multiple], select[size] { height: auto; }

select optgroup { font-size: inherit; font-style: inherit; font-family: inherit; }

input[type="file"]:focus, input[type="radio"]:focus, input[type="checkbox"]:focus { outline: -webkit-focus-ring-color auto 5px; outline-offset: -2px; }

input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { height: auto; }

output { display: block; padding-top: 7px; font-size: 14px; line-height: 1.42857; color: rgb(85, 85, 85); vertical-align: middle; }

.form-control::-webkit-input-placeholder { color: rgb(153, 153, 153); }

.form-control { display: block; width: 100%; height: 34px; padding: 6px 12px; font-size: 14px; line-height: 1.42857; color: rgb(85, 85, 85); vertical-align: middle; background-color: rgb(255, 255, 255); background-image: none; border: 1px solid rgb(204, 204, 204); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; }

.form-control:focus { border-color: rgb(102, 175, 233); outline: 0px; box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgba(102, 175, 233, 0.6) 0px 0px 8px; }

.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control { cursor: not-allowed; background-color: rgb(238, 238, 238); }

textarea.form-control { height: auto; }

.form-group { margin-bottom: 15px; }

.radio, .checkbox { display: block; min-height: 20px; margin-top: 10px; margin-bottom: 10px; padding-left: 20px; vertical-align: middle; }

.radio label, .checkbox label { display: inline; margin-bottom: 0px; font-weight: normal; cursor: pointer; }

.radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"] { float: left; margin-left: -20px; }

.radio + .radio, .checkbox + .checkbox { margin-top: -5px; }

.radio-inline, .checkbox-inline { display: inline-block; padding-left: 20px; margin-bottom: 0px; vertical-align: middle; font-weight: normal; cursor: pointer; }

.radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline { margin-top: 0px; margin-left: 10px; }

input[type="radio"][disabled], input[type="checkbox"][disabled], .radio[disabled], .radio-inline[disabled], .checkbox[disabled], .checkbox-inline[disabled], fieldset[disabled] input[type="radio"], fieldset[disabled] input[type="checkbox"], fieldset[disabled] .radio, fieldset[disabled] .radio-inline, fieldset[disabled] .checkbox, fieldset[disabled] .checkbox-inline { cursor: not-allowed; }

.input-sm { height: 30px; padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

select.input-sm { height: 30px; line-height: 30px; }

textarea.input-sm { height: auto; }

.input-lg { height: 45px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

select.input-lg { height: 45px; line-height: 45px; }

textarea.input-lg { height: auto; }

.has-warning .help-block, .has-warning .control-label { color: rgb(192, 152, 83); }

.has-warning .form-control { border-color: rgb(192, 152, 83); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; }

.has-warning .form-control:focus { border-color: rgb(164, 126, 60); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(219, 197, 158) 0px 0px 6px; }

.has-warning .input-group-addon { color: rgb(192, 152, 83); border-color: rgb(192, 152, 83); background-color: rgb(252, 248, 227); }

.has-error .help-block, .has-error .control-label { color: rgb(185, 74, 72); }

.has-error .form-control { border-color: rgb(185, 74, 72); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; }

.has-error .form-control:focus { border-color: rgb(149, 59, 57); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(213, 147, 146) 0px 0px 6px; }

.has-error .input-group-addon { color: rgb(185, 74, 72); border-color: rgb(185, 74, 72); background-color: rgb(242, 222, 222); }

.has-success .help-block, .has-success .control-label { color: rgb(70, 136, 71); }

.has-success .form-control { border-color: rgb(70, 136, 71); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset; }

.has-success .form-control:focus { border-color: rgb(53, 102, 53); box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(122, 186, 123) 0px 0px 6px; }

.has-success .input-group-addon { color: rgb(70, 136, 71); border-color: rgb(70, 136, 71); background-color: rgb(223, 240, 216); }

.form-control-static { margin-bottom: 0px; }

.help-block { display: block; margin-top: 5px; margin-bottom: 10px; color: rgb(115, 115, 115); }

@media (min-width: 768px) {
  .form-inline .form-group { display: inline-block; margin-bottom: 0px; vertical-align: middle; }
  .form-inline .form-control { display: inline-block; }
  .form-inline .radio, .form-inline .checkbox { display: inline-block; margin-top: 0px; margin-bottom: 0px; padding-left: 0px; }
  .form-inline .radio input[type="radio"], .form-inline .checkbox input[type="checkbox"] { float: none; margin-left: 0px; }
}

.form-horizontal .control-label, .form-horizontal .radio, .form-horizontal .checkbox, .form-horizontal .radio-inline, .form-horizontal .checkbox-inline { margin-top: 0px; margin-bottom: 0px; padding-top: 7px; }

.form-horizontal .form-group { margin-left: -15px; margin-right: -15px; }

.form-horizontal .form-group::before, .form-horizontal .form-group::after { content: " "; display: table; }

.form-horizontal .form-group::after { clear: both; }

.form-horizontal .form-group::before, .form-horizontal .form-group::after { content: " "; display: table; }

.form-horizontal .form-group::after { clear: both; }

.form-horizontal .form-control-static { padding-top: 7px; }

@media (min-width: 768px) {
  .form-horizontal .control-label { text-align: right; }
}

.btn { display: inline-block; margin-bottom: 0px; font-weight: normal; text-align: center; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; white-space: nowrap; padding: 6px 12px; font-size: 14px; line-height: 1.42857; border-radius: 4px; user-select: none; }

.btn:focus { outline: -webkit-focus-ring-color auto 5px; outline-offset: -2px; }

.btn:hover, .btn:focus { color: rgb(51, 51, 51); text-decoration: none; }

.btn:active, .btn.active { outline: 0px; background-image: none; box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 5px inset; }

.btn.disabled, .btn[disabled], fieldset[disabled] .btn { cursor: not-allowed; pointer-events: none; opacity: 0.65; box-shadow: none; }

.btn-default { color: rgb(51, 51, 51); background-color: rgb(255, 255, 255); border-color: rgb(204, 204, 204); }

.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default { color: rgb(51, 51, 51); background-color: rgb(235, 235, 235); border-color: rgb(173, 173, 173); }

.btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default { background-image: none; }

.btn-default.disabled, .btn-default[disabled], fieldset[disabled] .btn-default, .btn-default.disabled:hover, .btn-default[disabled]:hover, fieldset[disabled] .btn-default:hover, .btn-default.disabled:focus, .btn-default[disabled]:focus, fieldset[disabled] .btn-default:focus, .btn-default.disabled:active, .btn-default[disabled]:active, fieldset[disabled] .btn-default:active, .btn-default.disabled.active, .btn-default[disabled].active, fieldset[disabled] .btn-default.active { background-color: rgb(255, 255, 255); border-color: rgb(204, 204, 204); }

.btn-primary { color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(53, 126, 189); }

.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary { color: rgb(255, 255, 255); background-color: rgb(50, 118, 177); border-color: rgb(40, 94, 142); }

.btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary { background-image: none; }

.btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active { background-color: rgb(66, 139, 202); border-color: rgb(53, 126, 189); }

.btn-warning { color: rgb(255, 255, 255); background-color: rgb(240, 173, 78); border-color: rgb(238, 162, 54); }

.btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning { color: rgb(255, 255, 255); background-color: rgb(237, 156, 40); border-color: rgb(213, 133, 18); }

.btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning { background-image: none; }

.btn-warning.disabled, .btn-warning[disabled], fieldset[disabled] .btn-warning, .btn-warning.disabled:hover, .btn-warning[disabled]:hover, fieldset[disabled] .btn-warning:hover, .btn-warning.disabled:focus, .btn-warning[disabled]:focus, fieldset[disabled] .btn-warning:focus, .btn-warning.disabled:active, .btn-warning[disabled]:active, fieldset[disabled] .btn-warning:active, .btn-warning.disabled.active, .btn-warning[disabled].active, fieldset[disabled] .btn-warning.active { background-color: rgb(240, 173, 78); border-color: rgb(238, 162, 54); }

.btn-danger { color: rgb(255, 255, 255); background-color: rgb(217, 83, 79); border-color: rgb(212, 63, 58); }

.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger { color: rgb(255, 255, 255); background-color: rgb(210, 50, 45); border-color: rgb(172, 41, 37); }

.btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger { background-image: none; }

.btn-danger.disabled, .btn-danger[disabled], fieldset[disabled] .btn-danger, .btn-danger.disabled:hover, .btn-danger[disabled]:hover, fieldset[disabled] .btn-danger:hover, .btn-danger.disabled:focus, .btn-danger[disabled]:focus, fieldset[disabled] .btn-danger:focus, .btn-danger.disabled:active, .btn-danger[disabled]:active, fieldset[disabled] .btn-danger:active, .btn-danger.disabled.active, .btn-danger[disabled].active, fieldset[disabled] .btn-danger.active { background-color: rgb(217, 83, 79); border-color: rgb(212, 63, 58); }

.btn-success { color: rgb(255, 255, 255); background-color: rgb(92, 184, 92); border-color: rgb(76, 174, 76); }

.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .open .dropdown-toggle.btn-success { color: rgb(255, 255, 255); background-color: rgb(71, 164, 71); border-color: rgb(57, 132, 57); }

.btn-success:active, .btn-success.active, .open .dropdown-toggle.btn-success { background-image: none; }

.btn-success.disabled, .btn-success[disabled], fieldset[disabled] .btn-success, .btn-success.disabled:hover, .btn-success[disabled]:hover, fieldset[disabled] .btn-success:hover, .btn-success.disabled:focus, .btn-success[disabled]:focus, fieldset[disabled] .btn-success:focus, .btn-success.disabled:active, .btn-success[disabled]:active, fieldset[disabled] .btn-success:active, .btn-success.disabled.active, .btn-success[disabled].active, fieldset[disabled] .btn-success.active { background-color: rgb(92, 184, 92); border-color: rgb(76, 174, 76); }

.btn-info { color: rgb(255, 255, 255); background-color: rgb(91, 192, 222); border-color: rgb(70, 184, 218); }

.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info { color: rgb(255, 255, 255); background-color: rgb(57, 179, 215); border-color: rgb(38, 154, 188); }

.btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info { background-image: none; }

.btn-info.disabled, .btn-info[disabled], fieldset[disabled] .btn-info, .btn-info.disabled:hover, .btn-info[disabled]:hover, fieldset[disabled] .btn-info:hover, .btn-info.disabled:focus, .btn-info[disabled]:focus, fieldset[disabled] .btn-info:focus, .btn-info.disabled:active, .btn-info[disabled]:active, fieldset[disabled] .btn-info:active, .btn-info.disabled.active, .btn-info[disabled].active, fieldset[disabled] .btn-info.active { background-color: rgb(91, 192, 222); border-color: rgb(70, 184, 218); }

.btn-link { color: rgb(67, 117, 158); font-weight: normal; cursor: pointer; border-radius: 0px; }

.btn-link, .btn-link:active, .btn-link[disabled], fieldset[disabled] .btn-link { background-color: transparent; box-shadow: none; }

.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active { border-color: transparent; }

.btn-link:hover, .btn-link:focus { color: rgb(44, 77, 104); text-decoration: underline; background-color: transparent; }

.btn-link[disabled]:hover, fieldset[disabled] .btn-link:hover, .btn-link[disabled]:focus, fieldset[disabled] .btn-link:focus { color: rgb(153, 153, 153); text-decoration: none; }

.btn-lg { padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

.btn-sm, .btn-xs { padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

.btn-xs { padding: 1px 5px; }

.btn-block { display: block; width: 100%; padding-left: 0px; padding-right: 0px; }

.btn-block + .btn-block { margin-top: 5px; }

input[type="submit"].btn-block, input[type="reset"].btn-block, input[type="button"].btn-block { width: 100%; }

.fade { opacity: 0; transition: opacity 0.15s linear 0s; }

.fade.in { opacity: 1; }

.collapse { display: none; }

.collapse.in { display: block; }

.collapsing { position: relative; height: 0px; overflow: hidden; transition: height 0.35s ease 0s; }

@font-face { font-family: "Glyphicons Halflings"; src: url("../font/glyphicons-halflings-regular.eot?#iefix") format("embedded-opentype"), url("../font/glyphicons-halflings-regular.woff") format("woff"), url("../font/glyphicons-halflings-regular.ttf") format("truetype"), url("../font/glyphicons-halflings-regular.svg#glyphicons_halflingsregular") format("svg"); }

.glyphicon { position: relative; top: 1px; display: inline-block; font-family: "Glyphicons Halflings"; font-style: normal; font-weight: normal; line-height: 1; -webkit-font-smoothing: antialiased; }

.glyphicon:empty { width: 1em; }

.glyphicon-asterisk::before { content: "*"; }

.glyphicon-plus::before { content: "+"; }

.glyphicon-euro::before { content: "â‚¬"; }

.glyphicon-minus::before { content: "âˆ’"; }

.glyphicon-cloud::before { content: "â˜"; }

.glyphicon-envelope::before { content: "âœ‰"; }

.glyphicon-pencil::before { content: "âœ"; }

.glyphicon-glass::before { content: "î€"; }

.glyphicon-music::before { content: "î€‚"; }

.glyphicon-search::before { content: "î€ƒ"; }

.glyphicon-heart::before { content: "î€…"; }

.glyphicon-star::before { content: "î€†"; }

.glyphicon-star-empty::before { content: "î€‡"; }

.glyphicon-user::before { content: "î€ˆ"; }

.glyphicon-film::before { content: "î€‰"; }

.glyphicon-th-large::before { content: "î€"; }

.glyphicon-th::before { content: "î€‘"; }

.glyphicon-th-list::before { content: "î€’"; }

.glyphicon-ok::before { content: "î€“"; }

.glyphicon-remove::before { content: "î€”"; }

.glyphicon-zoom-in::before { content: "î€•"; }

.glyphicon-zoom-out::before { content: "î€–"; }

.glyphicon-off::before { content: "î€—"; }

.glyphicon-signal::before { content: "î€˜"; }

.glyphicon-cog::before { content: "î€™"; }

.glyphicon-trash::before { content: "î€ "; }

.glyphicon-home::before { content: "î€¡"; }

.glyphicon-file::before { content: "î€¢"; }

.glyphicon-time::before { content: "î€£"; }

.glyphicon-road::before { content: "î€¤"; }

.glyphicon-download-alt::before { content: "î€¥"; }

.glyphicon-download::before { content: "î€¦"; }

.glyphicon-upload::before { content: "î€§"; }

.glyphicon-inbox::before { content: "î€¨"; }

.glyphicon-play-circle::before { content: "î€©"; }

.glyphicon-repeat::before { content: "î€°"; }

.glyphicon-refresh::before { content: "î€±"; }

.glyphicon-list-alt::before { content: "î€²"; }

.glyphicon-lock::before { content: "î€³"; }

.glyphicon-flag::before { content: "î€´"; }

.glyphicon-headphones::before { content: "î€µ"; }

.glyphicon-volume-off::before { content: "î€¶"; }

.glyphicon-volume-down::before { content: "î€·"; }

.glyphicon-volume-up::before { content: "î€¸"; }

.glyphicon-qrcode::before { content: "î€¹"; }

.glyphicon-barcode::before { content: "î€"; }

.glyphicon-tag::before { content: "î"; }

.glyphicon-tags::before { content: "î‚"; }

.glyphicon-book::before { content: "îƒ"; }

.glyphicon-bookmark::before { content: "î„"; }

.glyphicon-print::before { content: "î…"; }

.glyphicon-camera::before { content: "î†"; }

.glyphicon-font::before { content: "î‡"; }

.glyphicon-bold::before { content: "îˆ"; }

.glyphicon-italic::before { content: "î‰"; }

.glyphicon-text-height::before { content: "î"; }

.glyphicon-text-width::before { content: "î‘"; }

.glyphicon-align-left::before { content: "î’"; }

.glyphicon-align-center::before { content: "î“"; }

.glyphicon-align-right::before { content: "î”"; }

.glyphicon-align-justify::before { content: "î•"; }

.glyphicon-list::before { content: "î–"; }

.glyphicon-indent-left::before { content: "î—"; }

.glyphicon-indent-right::before { content: "î˜"; }

.glyphicon-facetime-video::before { content: "î™"; }

.glyphicon-picture::before { content: "î "; }

.glyphicon-map-marker::before { content: "î¢"; }

.glyphicon-adjust::before { content: "î£"; }

.glyphicon-tint::before { content: "î¤"; }

.glyphicon-edit::before { content: "î¥"; }

.glyphicon-share::before { content: "î¦"; }

.glyphicon-check::before { content: "î§"; }

.glyphicon-move::before { content: "î¨"; }

.glyphicon-step-backward::before { content: "î©"; }

.glyphicon-fast-backward::before { content: "î°"; }

.glyphicon-backward::before { content: "î±"; }

.glyphicon-play::before { content: "î²"; }

.glyphicon-pause::before { content: "î³"; }

.glyphicon-stop::before { content: "î´"; }

.glyphicon-forward::before { content: "îµ"; }

.glyphicon-fast-forward::before { content: "î¶"; }

.glyphicon-step-forward::before { content: "î·"; }

.glyphicon-eject::before { content: "î¸"; }

.glyphicon-chevron-left::before { content: "î¹"; }

.glyphicon-chevron-right::before { content: "î‚€"; }

.glyphicon-plus-sign::before { content: "î‚"; }

.glyphicon-minus-sign::before { content: "î‚‚"; }

.glyphicon-remove-sign::before { content: "î‚ƒ"; }

.glyphicon-ok-sign::before { content: "î‚„"; }

.glyphicon-question-sign::before { content: "î‚…"; }

.glyphicon-info-sign::before { content: "î‚†"; }

.glyphicon-screenshot::before { content: "î‚‡"; }

.glyphicon-remove-circle::before { content: "î‚ˆ"; }

.glyphicon-ok-circle::before { content: "î‚‰"; }

.glyphicon-ban-circle::before { content: "î‚"; }

.glyphicon-arrow-left::before { content: "î‚‘"; }

.glyphicon-arrow-right::before { content: "î‚’"; }

.glyphicon-arrow-up::before { content: "î‚“"; }

.glyphicon-arrow-down::before { content: "î‚”"; }

.glyphicon-share-alt::before { content: "î‚•"; }

.glyphicon-resize-full::before { content: "î‚–"; }

.glyphicon-resize-small::before { content: "î‚—"; }

.glyphicon-exclamation-sign::before { content: "î„"; }

.glyphicon-gift::before { content: "î„‚"; }

.glyphicon-leaf::before { content: "î„ƒ"; }

.glyphicon-fire::before { content: "î„„"; }

.glyphicon-eye-open::before { content: "î„…"; }

.glyphicon-eye-close::before { content: "î„†"; }

.glyphicon-warning-sign::before { content: "î„‡"; }

.glyphicon-plane::before { content: "î„ˆ"; }

.glyphicon-calendar::before { content: "î„‰"; }

.glyphicon-random::before { content: "î„"; }

.glyphicon-comment::before { content: "î„‘"; }

.glyphicon-magnet::before { content: "î„’"; }

.glyphicon-chevron-up::before { content: "î„“"; }

.glyphicon-chevron-down::before { content: "î„”"; }

.glyphicon-retweet::before { content: "î„•"; }

.glyphicon-shopping-cart::before { content: "î„–"; }

.glyphicon-folder-close::before { content: "î„—"; }

.glyphicon-folder-open::before { content: "î„˜"; }

.glyphicon-resize-vertical::before { content: "î„™"; }

.glyphicon-resize-horizontal::before { content: "î„ "; }

.glyphicon-hdd::before { content: "î„¡"; }

.glyphicon-bullhorn::before { content: "î„¢"; }

.glyphicon-bell::before { content: "î„£"; }

.glyphicon-certificate::before { content: "î„¤"; }

.glyphicon-thumbs-up::before { content: "î„¥"; }

.glyphicon-thumbs-down::before { content: "î„¦"; }

.glyphicon-hand-right::before { content: "î„§"; }

.glyphicon-hand-left::before { content: "î„¨"; }

.glyphicon-hand-up::before { content: "î„©"; }

.glyphicon-hand-down::before { content: "î„°"; }

.glyphicon-circle-arrow-right::before { content: "î„±"; }

.glyphicon-circle-arrow-left::before { content: "î„²"; }

.glyphicon-circle-arrow-up::before { content: "î„³"; }

.glyphicon-circle-arrow-down::before { content: "î„´"; }

.glyphicon-globe::before { content: "î„µ"; }

.glyphicon-wrench::before { content: "î„¶"; }

.glyphicon-tasks::before { content: "î„·"; }

.glyphicon-filter::before { content: "î„¸"; }

.glyphicon-briefcase::before { content: "î„¹"; }

.glyphicon-fullscreen::before { content: "î…€"; }

.glyphicon-dashboard::before { content: "î…"; }

.glyphicon-paperclip::before { content: "î…‚"; }

.glyphicon-heart-empty::before { content: "î…ƒ"; }

.glyphicon-link::before { content: "î…„"; }

.glyphicon-phone::before { content: "î……"; }

.glyphicon-pushpin::before { content: "î…†"; }

.glyphicon-usd::before { content: "î…ˆ"; }

.glyphicon-gbp::before { content: "î…‰"; }

.glyphicon-sort::before { content: "î…"; }

.glyphicon-sort-by-alphabet::before { content: "î…‘"; }

.glyphicon-sort-by-alphabet-alt::before { content: "î…’"; }

.glyphicon-sort-by-order::before { content: "î…“"; }

.glyphicon-sort-by-order-alt::before { content: "î…”"; }

.glyphicon-sort-by-attributes::before { content: "î…•"; }

.glyphicon-sort-by-attributes-alt::before { content: "î…–"; }

.glyphicon-unchecked::before { content: "î…—"; }

.glyphicon-expand::before { content: "î…˜"; }

.glyphicon-collapse-down::before { content: "î…™"; }

.glyphicon-collapse-up::before { content: "î… "; }

.glyphicon-log-in::before { content: "î…¡"; }

.glyphicon-flash::before { content: "î…¢"; }

.glyphicon-log-out::before { content: "î…£"; }

.glyphicon-new-window::before { content: "î…¤"; }

.glyphicon-record::before { content: "î…¥"; }

.glyphicon-save::before { content: "î…¦"; }

.glyphicon-open::before { content: "î…§"; }

.glyphicon-saved::before { content: "î…¨"; }

.glyphicon-import::before { content: "î…©"; }

.glyphicon-export::before { content: "î…°"; }

.glyphicon-send::before { content: "î…±"; }

.glyphicon-floppy-disk::before { content: "î…²"; }

.glyphicon-floppy-saved::before { content: "î…³"; }

.glyphicon-floppy-remove::before { content: "î…´"; }

.glyphicon-floppy-save::before { content: "î…µ"; }

.glyphicon-floppy-open::before { content: "î…¶"; }

.glyphicon-credit-card::before { content: "î…·"; }

.glyphicon-transfer::before { content: "î…¸"; }

.glyphicon-cutlery::before { content: "î…¹"; }

.glyphicon-header::before { content: "î†€"; }

.glyphicon-compressed::before { content: "î†"; }

.glyphicon-earphone::before { content: "î†‚"; }

.glyphicon-phone-alt::before { content: "î†ƒ"; }

.glyphicon-tower::before { content: "î†„"; }

.glyphicon-stats::before { content: "î†…"; }

.glyphicon-sd-video::before { content: "î††"; }

.glyphicon-hd-video::before { content: "î†‡"; }

.glyphicon-subtitles::before { content: "î†ˆ"; }

.glyphicon-sound-stereo::before { content: "î†‰"; }

.glyphicon-sound-dolby::before { content: "î†"; }

.glyphicon-sound-5-1::before { content: "î†‘"; }

.glyphicon-sound-6-1::before { content: "î†’"; }

.glyphicon-sound-7-1::before { content: "î†“"; }

.glyphicon-copyright-mark::before { content: "î†”"; }

.glyphicon-registration-mark::before { content: "î†•"; }

.glyphicon-cloud-download::before { content: "î†—"; }

.glyphicon-cloud-upload::before { content: "î†˜"; }

.glyphicon-tree-conifer::before { content: "î†™"; }

.glyphicon-tree-deciduous::before { content: "îˆ€"; }

.caret { display: inline-block; width: 0px; height: 0px; margin-left: 2px; vertical-align: middle; border-width: 4px 4px 0px; border-style: solid solid dotted; border-top-color: rgb(0, 0, 0); border-right-color: transparent; border-left-color: transparent; border-bottom-color: initial; }

.dropdown { position: relative; }

.dropdown-toggle:focus { outline: 0px; }

.dropdown-menu { position: absolute; top: 100%; left: 0px; z-index: 1000; display: none; float: left; min-width: 160px; padding: 5px 0px; margin: 2px 0px 0px; list-style: none; font-size: 14px; background-color: rgb(255, 255, 255); border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.176) 0px 6px 12px; background-clip: padding-box; }

.dropdown-menu.pull-right { right: 0px; left: auto; }

.dropdown-menu .divider { height: 1px; margin: 9px 0px; overflow: hidden; background-color: rgb(229, 229, 229); }

.dropdown-menu > li > a { display: block; padding: 3px 20px; clear: both; font-weight: normal; line-height: 1.42857; color: rgb(51, 51, 51); white-space: nowrap; }

.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus { text-decoration: none; color: rgb(38, 38, 38); background-color: rgb(245, 245, 245); }

.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { color: rgb(255, 255, 255); text-decoration: none; outline: 0px; background-color: rgb(66, 139, 202); }

.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus { color: rgb(153, 153, 153); }

.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus { text-decoration: none; background-color: transparent; background-image: none; cursor: not-allowed; }

.open > .dropdown-menu { display: block; }

.open > a { outline: 0px; }

.dropdown-header { display: block; padding: 3px 20px; font-size: 12px; line-height: 1.42857; color: rgb(153, 153, 153); }

.dropdown-backdrop { position: fixed; inset: 0px; z-index: 990; }

.pull-right > .dropdown-menu { right: 0px; left: auto; }

.dropup .caret, .navbar-fixed-bottom .dropdown .caret { border-top: 0px dotted; border-bottom: 4px solid rgb(0, 0, 0); content: ""; }

.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu { top: auto; bottom: 100%; margin-bottom: 1px; }

@media (min-width: 768px) {
  .navbar-right .dropdown-menu { right: 0px; left: auto; }
}

.btn-default .caret { border-top-color: rgb(51, 51, 51); }

.btn-primary .caret, .btn-success .caret, .btn-warning .caret, .btn-danger .caret, .btn-info .caret { border-top-color: rgb(255, 255, 255); }

.dropup .btn-default .caret { border-bottom-color: rgb(51, 51, 51); }

.dropup .btn-primary .caret, .dropup .btn-success .caret, .dropup .btn-warning .caret, .dropup .btn-danger .caret, .dropup .btn-info .caret { border-bottom-color: rgb(255, 255, 255); }

.btn-group, .btn-group-vertical { position: relative; display: inline-block; vertical-align: middle; }

.btn-group > .btn, .btn-group-vertical > .btn { position: relative; float: left; }

.btn-group > .btn:hover, .btn-group-vertical > .btn:hover, .btn-group > .btn:focus, .btn-group-vertical > .btn:focus, .btn-group > .btn:active, .btn-group-vertical > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn.active { z-index: 2; }

.btn-group > .btn:focus, .btn-group-vertical > .btn:focus { outline: none; }

.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group { margin-left: -1px; }

.btn-toolbar::before, .btn-toolbar::after { content: " "; display: table; }

.btn-toolbar::after { clear: both; }

.btn-toolbar::before, .btn-toolbar::after { content: " "; display: table; }

.btn-toolbar::after { clear: both; }

.btn-toolbar .btn-group { float: left; }

.btn-toolbar > .btn + .btn, .btn-toolbar > .btn-group + .btn, .btn-toolbar > .btn + .btn-group, .btn-toolbar > .btn-group + .btn-group { margin-left: 5px; }

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) { border-radius: 0px; }

.btn-group > .btn:first-child { margin-left: 0px; }

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) { border-bottom-right-radius: 0px; border-top-right-radius: 0px; }

.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) { border-bottom-left-radius: 0px; border-top-left-radius: 0px; }

.btn-group > .btn-group { float: left; }

.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn { border-radius: 0px; }

.btn-group > .btn-group:first-child > .btn:last-child, .btn-group > .btn-group:first-child > .dropdown-toggle { border-bottom-right-radius: 0px; border-top-right-radius: 0px; }

.btn-group > .btn-group:last-child > .btn:first-child { border-bottom-left-radius: 0px; border-top-left-radius: 0px; }

.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle { outline: 0px; }

.btn-group-xs > .btn { font-size: 12px; line-height: 1.5; border-radius: 3px; padding: 1px 5px; }

.btn-group-sm > .btn { padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

.btn-group-lg > .btn { padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

.btn-group > .btn + .dropdown-toggle { padding-left: 8px; padding-right: 8px; }

.btn-group > .btn-lg + .dropdown-toggle { padding-left: 12px; padding-right: 12px; }

.btn-group.open .dropdown-toggle { box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 5px inset; }

.btn .caret { margin-left: 0px; }

.btn-lg .caret { border-width: 5px 5px 0px; }

.dropup .btn-lg .caret { border-width: 0px 5px 5px; }

.btn-group-vertical > .btn, .btn-group-vertical > .btn-group { display: block; float: none; width: 100%; max-width: 100%; }

.btn-group-vertical > .btn-group::before, .btn-group-vertical > .btn-group::after { content: " "; display: table; }

.btn-group-vertical > .btn-group::after { clear: both; }

.btn-group-vertical > .btn-group::before, .btn-group-vertical > .btn-group::after { content: " "; display: table; }

.btn-group-vertical > .btn-group::after { clear: both; }

.btn-group-vertical > .btn-group > .btn { float: none; }

.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group { margin-top: -1px; margin-left: 0px; }

.btn-group-vertical > .btn:not(:first-child):not(:last-child) { border-radius: 0px; }

.btn-group-vertical > .btn:first-child:not(:last-child) { border-top-right-radius: 4px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }

.btn-group-vertical > .btn:last-child:not(:first-child) { border-bottom-left-radius: 4px; border-top-right-radius: 0px; border-top-left-radius: 0px; }

.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn { border-radius: 0px; }

.btn-group-vertical > .btn-group:first-child > .btn:last-child, .btn-group-vertical > .btn-group:first-child > .dropdown-toggle { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }

.btn-group-vertical > .btn-group:last-child > .btn:first-child { border-top-right-radius: 0px; border-top-left-radius: 0px; }

.btn-group-justified { display: table; width: 100%; table-layout: fixed; border-collapse: separate; }

.btn-group-justified .btn { float: none; display: table-cell; width: 1%; }

[data-toggle="buttons"] > .btn > input[type="radio"], [data-toggle="buttons"] > .btn > input[type="checkbox"] { display: none; }

.input-group { position: relative; display: table; border-collapse: separate; }

.input-group.col { float: none; padding-left: 0px; padding-right: 0px; }

.input-group .form-control { width: 100%; margin-bottom: 0px; }

.input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn { height: 45px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }

select.input-group-lg > .form-control, select.input-group-lg > .input-group-addon, select.input-group-lg > .input-group-btn > .btn { height: 45px; line-height: 45px; }

textarea.input-group-lg > .form-control, textarea.input-group-lg > .input-group-addon, textarea.input-group-lg > .input-group-btn > .btn { height: auto; }

.input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn { height: 30px; padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }

select.input-group-sm > .form-control, select.input-group-sm > .input-group-addon, select.input-group-sm > .input-group-btn > .btn { height: 30px; line-height: 30px; }

textarea.input-group-sm > .form-control, textarea.input-group-sm > .input-group-addon, textarea.input-group-sm > .input-group-btn > .btn { height: auto; }

.input-group-addon, .input-group-btn, .input-group .form-control { display: table-cell; }

.input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child), .input-group .form-control:not(:first-child):not(:last-child) { border-radius: 0px; }

.input-group-addon, .input-group-btn { width: 1%; white-space: nowrap; vertical-align: middle; }

.input-group-addon { padding: 6px 12px; font-size: 14px; font-weight: normal; line-height: 1; color: rgb(85, 85, 85); text-align: center; background-color: rgb(238, 238, 238); border: 1px solid rgb(204, 204, 204); border-radius: 4px; }

.input-group-addon.input-sm { padding: 5px 10px; font-size: 12px; border-radius: 3px; }

.input-group-addon.input-lg { padding: 10px 16px; font-size: 18px; border-radius: 6px; }

.input-group-addon input[type="radio"], .input-group-addon input[type="checkbox"] { margin-top: 0px; }

.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) { border-bottom-right-radius: 0px; border-top-right-radius: 0px; }

.input-group-addon:first-child { border-right: 0px; }

.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:last-child > .btn, .input-group-btn:last-child > .dropdown-toggle, .input-group-btn:first-child > .btn:not(:first-child) { border-bottom-left-radius: 0px; border-top-left-radius: 0px; }

.input-group-addon:last-child { border-left: 0px; }

.input-group-btn { position: relative; white-space: nowrap; }

.input-group-btn:first-child > .btn { margin-right: -1px; }

.input-group-btn:last-child > .btn { margin-left: -1px; }

.input-group-btn > .btn { position: relative; }

.input-group-btn > .btn + .btn { margin-left: -4px; }

.input-group-btn > .btn:hover, .input-group-btn > .btn:active { z-index: 2; }

.nav { margin-bottom: 0px; padding-left: 0px; list-style: none; }

.nav::before, .nav::after { content: " "; display: table; }

.nav::after { clear: both; }

.nav::before, .nav::after { content: " "; display: table; }

.nav::after { clear: both; }

.nav > li { position: relative; display: block; }

.nav > li > a, .docs-nav .navbar-nav > li > span { position: relative; display: block; padding: 10px 15px; }

.nav > li > a:hover, .nav > li > a:focus { text-decoration: none; background-color: rgb(238, 238, 238); }

.nav > li.disabled > a { color: rgb(153, 153, 153); }

.nav > li.disabled > a:hover, .nav > li.disabled > a:focus { color: rgb(153, 153, 153); text-decoration: none; background-color: transparent; cursor: not-allowed; }

.nav .open > a, .nav .open > a:hover, .nav .open > a:focus { background-color: rgb(238, 238, 238); border-color: rgb(67, 117, 158); }

.nav .open > a .caret, .nav .open > a:hover .caret, .nav .open > a:focus .caret { border-top-color: rgb(44, 77, 104); border-bottom-color: rgb(44, 77, 104); }

.nav .nav-divider { height: 1px; margin: 9px 0px; overflow: hidden; background-color: rgb(229, 229, 229); }

.nav > li > a > img { max-width: none; }

.nav-tabs { border-bottom: 1px solid rgb(221, 221, 221); }

.nav-tabs > li { float: left; margin-bottom: -1px; }

.nav-tabs > li > a { margin-right: 2px; line-height: 1.42857; border: 1px solid transparent; border-radius: 4px 4px 0px 0px; }

.nav-tabs > li > a:hover { border-color: rgb(238, 238, 238) rgb(238, 238, 238) rgb(221, 221, 221); }

.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus { color: rgb(85, 85, 85); background-color: rgb(247, 247, 247); border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221) rgb(221, 221, 221) transparent; border-image: initial; cursor: default; }

.nav-tabs.nav-justified { width: 100%; border-bottom: 0px; }

.nav-tabs.nav-justified > li { float: none; }

.nav-tabs.nav-justified > li > a { text-align: center; margin-bottom: 5px; }

@media (min-width: 768px) {
  .nav-tabs.nav-justified > li { display: table-cell; width: 1%; }
  .nav-tabs.nav-justified > li > a { margin-bottom: 0px; }
}

.nav-tabs.nav-justified > li > a { margin-right: 0px; border-radius: 4px; }

.nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus { border: 1px solid rgb(221, 221, 221); }

@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a { border-bottom: 1px solid rgb(221, 221, 221); border-radius: 4px 4px 0px 0px; }
  .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus { border-bottom-color: rgb(247, 247, 247); }
}

.nav-pills > li { float: left; }

.nav-pills > li > a { border-radius: 4px; }

.nav-pills > li + li { margin-left: 2px; }

.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus { color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); }

.nav-pills > li.active > a .caret, .nav-pills > li.active > a:hover .caret, .nav-pills > li.active > a:focus .caret { border-top-color: rgb(255, 255, 255); border-bottom-color: rgb(255, 255, 255); }

.nav-stacked > li { float: none; }

.nav-stacked > li + li { margin-top: 2px; margin-left: 0px; }

.nav-justified { width: 100%; }

.nav-justified > li { float: none; }

.nav-justified > li > a { text-align: center; margin-bottom: 5px; }

@media (min-width: 768px) {
  .nav-justified > li { display: table-cell; width: 1%; }
  .nav-justified > li > a { margin-bottom: 0px; }
}

.nav-tabs-justified { border-bottom: 0px; }

.nav-tabs-justified > li > a { margin-right: 0px; border-radius: 4px; }

.nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus { border: 1px solid rgb(221, 221, 221); }

@media (min-width: 768px) {
  .nav-tabs-justified > li > a { border-bottom: 1px solid rgb(221, 221, 221); border-radius: 4px 4px 0px 0px; }
  .nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus { border-bottom-color: rgb(247, 247, 247); }
}

.tab-content > .tab-pane { display: none; }

.tab-content > .active { display: block; }

.nav .caret { border-top-color: rgb(67, 117, 158); border-bottom-color: rgb(67, 117, 158); }

.nav a:hover .caret { border-top-color: rgb(44, 77, 104); border-bottom-color: rgb(44, 77, 104); }

.nav-tabs .dropdown-menu { margin-top: -1px; border-top-right-radius: 0px; border-top-left-radius: 0px; }

.navbar { position: relative; z-index: 1000; min-height: 60px; margin-bottom: 20px; border: 1px solid transparent; }

.navbar::before, .navbar::after { content: " "; display: table; }

.navbar::after { clear: both; }

.navbar::before, .navbar::after { content: " "; display: table; }

.navbar::after { clear: both; }

@media (min-width: 768px) {
  .navbar { border-radius: 4px; }
}

.navbar-header::before, .navbar-header::after { content: " "; display: table; }

.navbar-header::after { clear: both; }

.navbar-header::before, .navbar-header::after { content: " "; display: table; }

.navbar-header::after { clear: both; }

@media (min-width: 768px) {
  .navbar-header { float: left; }
}

.navbar-collapse { max-height: 340px; overflow-x: visible; padding-right: 15px; padding-left: 15px; border-top: 1px solid transparent; box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px inset; }

.navbar-collapse::before, .navbar-collapse::after { content: " "; display: table; }

.navbar-collapse::after { clear: both; }

.navbar-collapse::before, .navbar-collapse::after { content: " "; display: table; }

.navbar-collapse::after { clear: both; }

.navbar-collapse.in { overflow-y: auto; }

@media (min-width: 768px) {
  .navbar-collapse { width: auto; border-top: 0px; box-shadow: none; }
  .navbar-collapse.collapse { padding-bottom: 0px; display: block !important; height: auto !important; overflow: visible !important; }
  .navbar-collapse.in { overflow-y: visible; }
  .navbar-collapse .navbar-nav.navbar-left:first-child { margin-left: -15px; }
  .navbar-collapse .navbar-nav.navbar-right:last-child { margin-right: -15px; }
  .navbar-collapse .navbar-text:last-child { margin-right: 0px; }
}

.container > .navbar-header, .container > .navbar-collapse { margin-right: -15px; margin-left: -15px; }

@media (min-width: 768px) {
  .container > .navbar-header, .container > .navbar-collapse { margin-right: 0px; margin-left: 0px; }
}

.navbar-static-top { border-width: 0px 0px 1px; }

@media (min-width: 768px) {
  .navbar-static-top { border-radius: 0px; }
}

.navbar-fixed-top, .navbar-fixed-bottom { position: fixed; right: 0px; left: 0px; border-width: 0px 0px 1px; }

@media (min-width: 768px) {
  .navbar-fixed-top, .navbar-fixed-bottom { border-radius: 0px; }
}

.navbar-fixed-top { z-index: 1030; top: 0px; }

.navbar-fixed-bottom { bottom: 0px; margin-bottom: 0px; }

.navbar-brand { float: left; padding: 20px 15px; font-size: 18px; line-height: 20px; }

.navbar-brand:hover, .navbar-brand:focus { text-decoration: none; }

@media (min-width: 768px) {
  .navbar > .container .navbar-brand { margin-left: -15px; }
}

.navbar-toggle { position: relative; float: right; margin-right: 15px; padding: 9px 10px; margin-top: 13px; margin-bottom: 13px; background-color: transparent; border: 1px solid transparent; border-radius: 4px; }

.navbar-toggle .icon-bar { display: block; width: 22px; height: 2px; border-radius: 1px; }

.navbar-toggle .icon-bar + .icon-bar { margin-top: 4px; }

@media (min-width: 768px) {
  .navbar-toggle { display: none; }
}

.navbar-nav { margin: 10px -15px; }

.navbar-nav > li > a, .docs-nav .navbar-nav > li > span { padding-top: 10px; padding-bottom: 10px; line-height: 20px; }

@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu { position: static; float: none; width: auto; margin-top: 0px; background-color: transparent; border: 0px; box-shadow: none; }
  .navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header { padding: 5px 15px 5px 25px; }
  .navbar-nav .open .dropdown-menu > li > a { line-height: 20px; }
  .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus { background-image: none; }
}

@media (min-width: 768px) {
  .navbar-nav { float: left; margin: 0px; }
  .navbar-nav > li { float: left; }
  .navbar-nav > li > a, .docs-nav .navbar-nav > li > span { padding-top: 20px; padding-bottom: 20px; }
}

@media (min-width: 768px) {
  .navbar-left { float: left !important; }
  .navbar-right { float: right !important; }
}

.navbar-form { margin: 13px -15px; padding: 10px 15px; border-top: 1px solid transparent; border-bottom: 1px solid transparent; box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 0px; }

@media (min-width: 768px) {
  .navbar-form .form-group { display: inline-block; margin-bottom: 0px; vertical-align: middle; }
  .navbar-form .form-control { display: inline-block; }
  .navbar-form .radio, .navbar-form .checkbox { display: inline-block; margin-top: 0px; margin-bottom: 0px; padding-left: 0px; }
  .navbar-form .radio input[type="radio"], .navbar-form .checkbox input[type="checkbox"] { float: none; margin-left: 0px; }
}

@media (max-width: 767px) {
  .navbar-form .form-group { margin-bottom: 5px; }
}

@media (min-width: 768px) {
  .navbar-form { width: auto; border: 0px; margin-left: 0px; margin-right: 0px; padding-top: 0px; padding-bottom: 0px; box-shadow: none; }
}

.navbar-nav > li > .dropdown-menu { margin-top: 0px; border-top-right-radius: 0px; border-top-left-radius: 0px; }

.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }

.navbar-nav.pull-right > li > .dropdown-menu, .navbar-nav > li > .dropdown-menu.pull-right { left: auto; right: 0px; }

.navbar-btn { margin-top: 13px; margin-bottom: 13px; }

.navbar-text { float: left; margin-top: 20px; margin-bottom: 20px; }

@media (min-width: 768px) {
  .navbar-text { margin-left: 15px; margin-right: 15px; }
}

.navbar-default { background-color: rgb(248, 248, 248); border-color: rgb(231, 231, 231); }

.navbar-default .navbar-brand { color: rgb(119, 119, 119); }

.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus { color: rgb(94, 94, 94); background-color: transparent; }

.navbar-default .navbar-text { color: rgb(119, 119, 119); }

.navbar-default .navbar-nav > li > a { color: rgb(119, 119, 119); }

.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus { color: rgb(51, 51, 51); background-color: transparent; }

.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus { color: rgb(85, 85, 85); background-color: rgb(231, 231, 231); }

.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus { color: rgb(204, 204, 204); background-color: transparent; }

.navbar-default .navbar-toggle { border-color: rgb(221, 221, 221); }

.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus { background-color: rgb(221, 221, 221); }

.navbar-default .navbar-toggle .icon-bar { background-color: rgb(204, 204, 204); }

.navbar-default .navbar-collapse, .navbar-default .navbar-form { border-color: rgb(231, 231, 231); }

.navbar-default .navbar-nav > .dropdown > a:hover .caret, .navbar-default .navbar-nav > .dropdown > a:focus .caret { border-top-color: rgb(51, 51, 51); border-bottom-color: rgb(51, 51, 51); }

.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus { background-color: rgb(231, 231, 231); color: rgb(85, 85, 85); }

.navbar-default .navbar-nav > .open > a .caret, .navbar-default .navbar-nav > .open > a:hover .caret, .navbar-default .navbar-nav > .open > a:focus .caret { border-top-color: rgb(85, 85, 85); border-bottom-color: rgb(85, 85, 85); }

.navbar-default .navbar-nav > .dropdown > a .caret { border-top-color: rgb(119, 119, 119); border-bottom-color: rgb(119, 119, 119); }

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a { color: rgb(119, 119, 119); }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus { color: rgb(51, 51, 51); background-color: transparent; }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus { color: rgb(85, 85, 85); background-color: rgb(231, 231, 231); }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus { color: rgb(204, 204, 204); background-color: transparent; }
}

.navbar-default .navbar-link { color: rgb(119, 119, 119); }

.navbar-default .navbar-link:hover { color: rgb(51, 51, 51); }

.navbar-inverse { background-color: rgb(29, 54, 93); border-color: rgb(17, 31, 54); }

.navbar-inverse .navbar-brand { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus { color: rgb(255, 255, 255); background-color: transparent; }

.navbar-inverse .navbar-text { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-nav > li > a { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus { color: rgb(255, 255, 255); background-color: transparent; }

.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus { color: rgb(255, 255, 255); background-color: rgb(17, 31, 54); }

.navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus { color: rgb(68, 68, 68); background-color: transparent; }

.navbar-inverse .navbar-toggle { border-color: rgb(51, 51, 51); }

.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus { background-color: rgb(51, 51, 51); }

.navbar-inverse .navbar-toggle .icon-bar { background-color: rgb(255, 255, 255); }

.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form { border-color: rgb(21, 38, 66); }

.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus { background-color: rgb(17, 31, 54); color: rgb(255, 255, 255); }

.navbar-inverse .navbar-nav > .dropdown > a:hover .caret { border-top-color: rgb(255, 255, 255); border-bottom-color: rgb(255, 255, 255); }

.navbar-inverse .navbar-nav > .dropdown > a .caret { border-top-color: rgb(185, 200, 224); border-bottom-color: rgb(185, 200, 224); }

.navbar-inverse .navbar-nav > .open > a .caret, .navbar-inverse .navbar-nav > .open > a:hover .caret, .navbar-inverse .navbar-nav > .open > a:focus .caret { border-top-color: rgb(255, 255, 255); border-bottom-color: rgb(255, 255, 255); }

@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header { border-color: rgb(17, 31, 54); }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a { color: rgb(185, 200, 224); }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus { color: rgb(255, 255, 255); background-color: transparent; }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus { color: rgb(255, 255, 255); background-color: rgb(17, 31, 54); }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus { color: rgb(68, 68, 68); background-color: transparent; }
}

.navbar-inverse .navbar-link { color: rgb(185, 200, 224); }

.navbar-inverse .navbar-link:hover { color: rgb(255, 255, 255); }

.breadcrumb { padding: 8px 15px; margin-bottom: 20px; list-style: none; background-color: rgb(245, 245, 245); border-radius: 4px; }

.breadcrumb > li { display: inline-block; }

.breadcrumb > li + li::before { content: "/Â "; padding: 0px 5px; color: rgb(204, 204, 204); }

.breadcrumb > .active { color: rgb(153, 153, 153); }

.pagination { display: inline-block; padding-left: 0px; margin: 20px 0px; border-radius: 4px; }

.pagination > li { display: inline; }

.pagination > li > a, .pagination > li > span { position: relative; float: left; padding: 6px 12px; line-height: 1.42857; text-decoration: none; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); margin-left: -1px; }

.pagination > li:first-child > a, .pagination > li:first-child > span { margin-left: 0px; border-bottom-left-radius: 4px; border-top-left-radius: 4px; }

.pagination > li:last-child > a, .pagination > li:last-child > span { border-bottom-right-radius: 4px; border-top-right-radius: 4px; }

.pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus { background-color: rgb(238, 238, 238); }

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus { z-index: 2; color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(66, 139, 202); cursor: default; }

.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus { color: rgb(153, 153, 153); background-color: rgb(255, 255, 255); border-color: rgb(221, 221, 221); cursor: not-allowed; }

.pagination-lg > li > a, .pagination-lg > li > span { padding: 10px 16px; font-size: 18px; }

.pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span { border-bottom-left-radius: 6px; border-top-left-radius: 6px; }

.pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span { border-bottom-right-radius: 6px; border-top-right-radius: 6px; }

.pagination-sm > li > a, .pagination-sm > li > span { padding: 5px 10px; font-size: 12px; }

.pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span { border-bottom-left-radius: 3px; border-top-left-radius: 3px; }

.pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span { border-bottom-right-radius: 3px; border-top-right-radius: 3px; }

.pager { padding-left: 0px; margin: 20px 0px; list-style: none; text-align: center; }

.pager::before, .pager::after { content: " "; display: table; }

.pager::after { clear: both; }

.pager::before, .pager::after { content: " "; display: table; }

.pager::after { clear: both; }

.pager li { display: inline; }

.pager li > a, .pager li > span { display: inline-block; padding: 5px 14px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); border-radius: 15px; }

.pager li > a:hover, .pager li > a:focus { text-decoration: none; background-color: rgb(238, 238, 238); }

.pager .next > a, .pager .next > span { float: right; }

.pager .previous > a, .pager .previous > span { float: left; }

.pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span { color: rgb(153, 153, 153); background-color: rgb(255, 255, 255); cursor: not-allowed; }

.label { display: inline; padding: 0.2em 0.6em 0.3em; font-size: 75%; font-weight: bold; line-height: 1; color: rgb(255, 255, 255); text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.25em; }

.label[href]:hover, .label[href]:focus { color: rgb(255, 255, 255); text-decoration: none; cursor: pointer; }

.label:empty { display: none; }

.label-default { background-color: rgb(153, 153, 153); }

.label-default[href]:hover, .label-default[href]:focus { background-color: rgb(128, 128, 128); }

.label-primary { background-color: rgb(66, 139, 202); }

.label-primary[href]:hover, .label-primary[href]:focus { background-color: rgb(48, 113, 169); }

.label-success { background-color: rgb(92, 184, 92); }

.label-success[href]:hover, .label-success[href]:focus { background-color: rgb(68, 157, 68); }

.label-info { background-color: rgb(91, 192, 222); }

.label-info[href]:hover, .label-info[href]:focus { background-color: rgb(49, 176, 213); }

.label-warning { background-color: rgb(240, 173, 78); }

.label-warning[href]:hover, .label-warning[href]:focus { background-color: rgb(236, 151, 31); }

.label-danger { background-color: rgb(217, 83, 79); }

.label-danger[href]:hover, .label-danger[href]:focus { background-color: rgb(201, 48, 44); }

.badge { display: inline-block; min-width: 10px; padding: 3px 7px; font-size: 12px; font-weight: bold; color: rgb(255, 255, 255); line-height: 1; vertical-align: baseline; white-space: nowrap; text-align: center; background-color: rgb(153, 153, 153); border-radius: 10px; }

.badge:empty { display: none; }

a.badge:hover, a.badge:focus { color: rgb(255, 255, 255); text-decoration: none; cursor: pointer; }

.btn .badge { position: relative; top: -1px; }

a.list-group-item.active > .badge, .nav-pills > .active > a > .badge { color: rgb(67, 117, 158); background-color: rgb(255, 255, 255); }

.nav-pills > li > a > .badge { margin-left: 3px; }

.jumbotron { padding: 30px; margin-bottom: 30px; font-size: 21px; font-weight: 200; line-height: 2.14286; color: inherit; background-color: rgb(238, 238, 238); }

.jumbotron h1 { line-height: 1; color: inherit; }

.jumbotron p { line-height: 1.4; }

.container .jumbotron { border-radius: 6px; }

@media screen and (min-width: 768px) {
  .jumbotron { padding-top: 48px; padding-bottom: 48px; }
  .container .jumbotron { padding-left: 60px; padding-right: 60px; }
  .jumbotron h1 { font-size: 63px; }
}

.thumbnail { padding: 4px; line-height: 1.42857; background-color: rgb(247, 247, 247); border: 1px solid rgb(221, 221, 221); border-radius: 4px; transition: all 0.2s ease-in-out 0s; max-width: 100%; height: auto; display: block; margin-bottom: 20px; }

.thumbnail > img { display: block; max-width: 100%; height: auto; }

a.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active { border-color: rgb(67, 117, 158); }

.thumbnail > img { margin-left: auto; margin-right: auto; }

.thumbnail .caption { padding: 9px; color: rgb(51, 51, 51); }

.alert { padding: 15px; margin-bottom: 20px; border: 1px solid transparent; border-radius: 4px; }

.alert h4 { margin-top: 0px; color: inherit; }

.alert .alert-link { font-weight: bold; }

.alert > p, .alert > ul { margin-bottom: 0px; }

.alert > p + p { margin-top: 5px; }

.alert-dismissable { padding-right: 35px; }

.alert-dismissable .close { position: relative; top: -2px; right: -21px; color: inherit; }

.alert-success { background-color: rgb(223, 240, 216); border-color: rgb(214, 233, 198); color: rgb(70, 136, 71); }

.alert-success hr { border-top-color: rgb(201, 226, 179); }

.alert-success .alert-link { color: rgb(53, 102, 53); }

.alert-info { background-color: rgb(217, 237, 247); border-color: rgb(188, 232, 241); color: rgb(58, 135, 173); }

.alert-info hr { border-top-color: rgb(166, 225, 236); }

.alert-info .alert-link { color: rgb(45, 105, 135); }

.alert-warning { background-color: rgb(252, 248, 227); border-color: rgb(250, 235, 204); color: rgb(192, 152, 83); }

.alert-warning hr { border-top-color: rgb(247, 225, 181); }

.alert-warning .alert-link { color: rgb(164, 126, 60); }

.alert-danger { background-color: rgb(242, 222, 222); border-color: rgb(235, 204, 209); color: rgb(185, 74, 72); }

.alert-danger hr { border-top-color: rgb(228, 185, 192); }

.alert-danger .alert-link { color: rgb(149, 59, 57); }

@-webkit-keyframes progress-bar-stripes { 
  0% { background-position: 40px 0px; }
  100% { background-position: 0px 0px; }
}

@keyframes progress-bar-stripes { 
  0% { background-position: 40px 0px; }
  100% { background-position: 0px 0px; }
}

.progress { overflow: hidden; height: 20px; margin-bottom: 20px; background-color: rgb(245, 245, 245); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px inset; }

.progress-bar { float: left; width: 0%; height: 100%; font-size: 12px; line-height: 20px; color: rgb(255, 255, 255); text-align: center; background-color: rgb(66, 139, 202); box-shadow: rgba(0, 0, 0, 0.15) 0px -1px 0px inset; transition: width 0.6s ease 0s; }

.progress-striped .progress-bar { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: 40px 40px; }

.progress.active .progress-bar { animation: 2s linear 0s infinite normal none running progress-bar-stripes; }

.progress-bar-success { background-color: rgb(92, 184, 92); }

.progress-striped .progress-bar-success { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-info { background-color: rgb(91, 192, 222); }

.progress-striped .progress-bar-info { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-warning { background-color: rgb(240, 173, 78); }

.progress-striped .progress-bar-warning { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-danger { background-color: rgb(217, 83, 79); }

.progress-striped .progress-bar-danger { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.media, .media-body { overflow: hidden; zoom: 1; }

.media, .media .media { margin-top: 15px; }

.media:first-child { margin-top: 0px; }

.media-object { display: block; }

.media-heading { margin: 0px 0px 5px; }

.media > .pull-left { margin-right: 10px; }

.media > .pull-right { margin-left: 10px; }

.media-list { padding-left: 0px; list-style: none; }

.list-group { margin-bottom: 20px; padding-left: 0px; }

.list-group-item { position: relative; display: block; padding: 10px 15px; margin-bottom: -1px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); }

.list-group-item:first-child { border-top-right-radius: 4px; border-top-left-radius: 4px; }

.list-group-item:last-child { margin-bottom: 0px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; }

.list-group-item > .badge { float: right; }

.list-group-item > .badge + .badge { margin-right: 5px; }

a.list-group-item { color: rgb(85, 85, 85); }

a.list-group-item .list-group-item-heading { color: rgb(51, 51, 51); }

a.list-group-item:hover, a.list-group-item:focus { text-decoration: none; background-color: rgb(245, 245, 245); }

a.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus { z-index: 2; color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(66, 139, 202); }

a.list-group-item.active .list-group-item-heading, a.list-group-item.active:hover .list-group-item-heading, a.list-group-item.active:focus .list-group-item-heading { color: inherit; }

a.list-group-item.active .list-group-item-text, a.list-group-item.active:hover .list-group-item-text, a.list-group-item.active:focus .list-group-item-text { color: rgb(225, 237, 247); }

.list-group-item-heading { margin-top: 0px; margin-bottom: 5px; }

.list-group-item-text { margin-bottom: 0px; line-height: 1.3; }

.panel { margin-bottom: 20px; background-color: rgb(255, 255, 255); border: 1px solid transparent; border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px; }

.panel-body { padding: 15px; }

.panel-body::before, .panel-body::after { content: " "; display: table; }

.panel-body::after { clear: both; }

.panel-body::before, .panel-body::after { content: " "; display: table; }

.panel-body::after { clear: both; }

.panel > .list-group { margin-bottom: 0px; }

.panel > .list-group .list-group-item { border-width: 1px 0px; }

.panel > .list-group .list-group-item:first-child { border-top-right-radius: 0px; border-top-left-radius: 0px; }

.panel > .list-group .list-group-item:last-child { border-bottom: 0px; }

.panel-heading + .list-group .list-group-item:first-child { border-top-width: 0px; }

.panel > .table, .panel > .table-responsive { margin-bottom: 0px; }

.panel > .panel-body + .table, .panel > .panel-body + .table-responsive { border-top: 1px solid rgb(221, 221, 221); }

.panel > .table-bordered, .panel > .table-responsive > .table-bordered { border: 0px; }

.panel > .table-bordered > thead > tr > th:first-child, .panel > .table-responsive > .table-bordered > thead > tr > th:first-child, .panel > .table-bordered > tbody > tr > th:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child, .panel > .table-bordered > tfoot > tr > th:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child, .panel > .table-bordered > thead > tr > td:first-child, .panel > .table-responsive > .table-bordered > thead > tr > td:first-child, .panel > .table-bordered > tbody > tr > td:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child, .panel > .table-bordered > tfoot > tr > td:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child { border-left: 0px; }

.panel > .table-bordered > thead > tr > th:last-child, .panel > .table-responsive > .table-bordered > thead > tr > th:last-child, .panel > .table-bordered > tbody > tr > th:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child, .panel > .table-bordered > tfoot > tr > th:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child, .panel > .table-bordered > thead > tr > td:last-child, .panel > .table-responsive > .table-bordered > thead > tr > td:last-child, .panel > .table-bordered > tbody > tr > td:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child, .panel > .table-bordered > tfoot > tr > td:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child { border-right: 0px; }

.panel > .table-bordered > thead > tr:last-child > th, .panel > .table-responsive > .table-bordered > thead > tr:last-child > th, .panel > .table-bordered > tbody > tr:last-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th, .panel > .table-bordered > tfoot > tr:last-child > th, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th, .panel > .table-bordered > thead > tr:last-child > td, .panel > .table-responsive > .table-bordered > thead > tr:last-child > td, .panel > .table-bordered > tbody > tr:last-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td, .panel > .table-bordered > tfoot > tr:last-child > td, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td { border-bottom: 0px; }

.panel-heading { padding: 10px 15px; border-bottom: 1px solid transparent; border-top-right-radius: 3px; border-top-left-radius: 3px; }

.panel-title { margin-top: 0px; margin-bottom: 0px; font-size: 16px; }

.panel-title > a { color: inherit; }

.panel-footer { padding: 10px 15px; background-color: rgb(245, 245, 245); border-top: 1px solid rgb(221, 221, 221); border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; }

.panel-group .panel { margin-bottom: 0px; border-radius: 4px; overflow: hidden; }

.panel-group .panel + .panel { margin-top: 5px; }

.panel-group .panel-heading { border-bottom: 0px; }

.panel-group .panel-heading + .panel-collapse .panel-body { border-top: 1px solid rgb(221, 221, 221); }

.panel-group .panel-footer { border-top: 0px; }

.panel-group .panel-footer + .panel-collapse .panel-body { border-bottom: 1px solid rgb(221, 221, 221); }

.panel-default { border-color: rgb(221, 221, 221); }

.panel-default > .panel-heading { color: rgb(51, 51, 51); background-color: rgb(245, 245, 245); border-color: rgb(221, 221, 221); }

.panel-default > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(221, 221, 221); }

.panel-default > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(221, 221, 221); }

.panel-primary { border-color: rgb(66, 139, 202); }

.panel-primary > .panel-heading { color: rgb(255, 255, 255); background-color: rgb(66, 139, 202); border-color: rgb(66, 139, 202); }

.panel-primary > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(66, 139, 202); }

.panel-primary > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(66, 139, 202); }

.panel-success { border-color: rgb(214, 233, 198); }

.panel-success > .panel-heading { color: rgb(70, 136, 71); background-color: rgb(223, 240, 216); border-color: rgb(214, 233, 198); }

.panel-success > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(214, 233, 198); }

.panel-success > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(214, 233, 198); }

.panel-warning { border-color: rgb(250, 235, 204); }

.panel-warning > .panel-heading { color: rgb(192, 152, 83); background-color: rgb(252, 248, 227); border-color: rgb(250, 235, 204); }

.panel-warning > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(250, 235, 204); }

.panel-warning > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(250, 235, 204); }

.panel-danger { border-color: rgb(235, 204, 209); }

.panel-danger > .panel-heading { color: rgb(185, 74, 72); background-color: rgb(242, 222, 222); border-color: rgb(235, 204, 209); }

.panel-danger > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(235, 204, 209); }

.panel-danger > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(235, 204, 209); }

.panel-info { border-color: rgb(188, 232, 241); }

.panel-info > .panel-heading { color: rgb(58, 135, 173); background-color: rgb(217, 237, 247); border-color: rgb(188, 232, 241); }

.panel-info > .panel-heading + .panel-collapse .panel-body { border-top-color: rgb(188, 232, 241); }

.panel-info > .panel-footer + .panel-collapse .panel-body { border-bottom-color: rgb(188, 232, 241); }

.well { min-height: 20px; padding: 19px; margin-bottom: 20px; background-color: rgb(245, 245, 245); border: 1px solid rgb(227, 227, 227); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px inset; }

.well blockquote { border-color: rgba(0, 0, 0, 0.15); }

.well-lg { padding: 24px; border-radius: 6px; }

.well-sm { padding: 9px; border-radius: 3px; }

.close { float: right; font-size: 21px; font-weight: bold; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.2; }

.close:hover, .close:focus { color: rgb(0, 0, 0); text-decoration: none; cursor: pointer; opacity: 0.5; }

button.close { padding: 0px; cursor: pointer; background: transparent; border: 0px; appearance: none; }

.modal-open { overflow: hidden; }

.modal { display: none; overflow: auto scroll; position: fixed; inset: 0px; z-index: 1040; }

.modal.fade .modal-dialog { transform: translate(0px, -25%); transition: transform 0.3s ease-out 0s; }

.modal.in .modal-dialog { transform: translate(0px, 0px); }

.modal-dialog { margin-left: auto; margin-right: auto; width: auto; padding: 10px; z-index: 1050; }

.modal-content { position: relative; background-color: rgb(255, 255, 255); border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 9px; background-clip: padding-box; outline: none; }

.modal-backdrop { position: fixed; inset: 0px; z-index: 1030; background-color: rgb(0, 0, 0); }

.modal-backdrop.fade { opacity: 0; }

.modal-backdrop.in { opacity: 0.5; }

.modal-header { padding: 15px; border-bottom: 1px solid rgb(229, 229, 229); min-height: 16.4286px; }

.modal-header .close { margin-top: -2px; }

.modal-title { margin: 0px; line-height: 1.42857; }

.modal-body { position: relative; padding: 20px; }

.modal-footer { margin-top: 15px; padding: 19px 20px 20px; text-align: right; border-top: 1px solid rgb(229, 229, 229); }

.modal-footer::before, .modal-footer::after { content: " "; display: table; }

.modal-footer::after { clear: both; }

.modal-footer::before, .modal-footer::after { content: " "; display: table; }

.modal-footer::after { clear: both; }

.modal-footer .btn + .btn { margin-left: 5px; margin-bottom: 0px; }

.modal-footer .btn-group .btn + .btn { margin-left: -1px; }

.modal-footer .btn-block + .btn-block { margin-left: 0px; }

@media screen and (min-width: 768px) {
  .modal-dialog { width: 600px; padding-top: 30px; padding-bottom: 30px; }
  .modal-content { box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px; }
}

.tooltip { position: absolute; z-index: 1030; display: block; visibility: visible; font-size: 12px; line-height: 1.4; opacity: 0; }

.tooltip.in { opacity: 0.9; }

.tooltip.top { margin-top: -3px; padding: 5px 0px; }

.tooltip.right { margin-left: 3px; padding: 0px 5px; }

.tooltip.bottom { margin-top: 3px; padding: 5px 0px; }

.tooltip.left { margin-left: -3px; padding: 0px 5px; }

.tooltip-inner { max-width: 200px; padding: 3px 8px; color: rgb(255, 255, 255); text-align: center; text-decoration: none; background-color: rgb(0, 0, 0); border-radius: 4px; }

.tooltip-arrow { position: absolute; width: 0px; height: 0px; border-color: transparent; border-style: solid; }

.tooltip.top .tooltip-arrow { bottom: 0px; left: 50%; margin-left: -5px; border-width: 5px 5px 0px; border-top-color: rgb(0, 0, 0); }

.tooltip.top-left .tooltip-arrow { bottom: 0px; left: 5px; border-width: 5px 5px 0px; border-top-color: rgb(0, 0, 0); }

.tooltip.top-right .tooltip-arrow { bottom: 0px; right: 5px; border-width: 5px 5px 0px; border-top-color: rgb(0, 0, 0); }

.tooltip.right .tooltip-arrow { top: 50%; left: 0px; margin-top: -5px; border-width: 5px 5px 5px 0px; border-right-color: rgb(0, 0, 0); }

.tooltip.left .tooltip-arrow { top: 50%; right: 0px; margin-top: -5px; border-width: 5px 0px 5px 5px; border-left-color: rgb(0, 0, 0); }

.tooltip.bottom .tooltip-arrow { top: 0px; left: 50%; margin-left: -5px; border-width: 0px 5px 5px; border-bottom-color: rgb(0, 0, 0); }

.tooltip.bottom-left .tooltip-arrow { top: 0px; left: 5px; border-width: 0px 5px 5px; border-bottom-color: rgb(0, 0, 0); }

.tooltip.bottom-right .tooltip-arrow { top: 0px; right: 5px; border-width: 0px 5px 5px; border-bottom-color: rgb(0, 0, 0); }

.popover { position: absolute; top: 0px; left: 0px; z-index: 1010; display: none; padding: 1px; text-align: left; background-color: rgb(255, 255, 255); background-clip: padding-box; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px; white-space: normal; }

.popover.top { margin-top: -10px; }

.popover.right { margin-left: 10px; }

.popover.bottom { margin-top: 10px; }

.popover.left { margin-left: -10px; }

.popover-title { margin: 0px; padding: 8px 14px; font-size: 14px; font-weight: normal; line-height: 18px; background-color: rgb(247, 247, 247); border-bottom: 1px solid rgb(235, 235, 235); border-radius: 5px 5px 0px 0px; }

.popover-content { padding: 9px 14px; }

.popover .arrow, .popover .arrow::after { position: absolute; display: block; width: 0px; height: 0px; border-color: transparent; border-style: solid; }

.popover .arrow { border-width: 11px; }

.popover .arrow::after { border-width: 10px; content: ""; }

.popover.top .arrow { left: 50%; margin-left: -11px; border-bottom-width: 0px; border-top-color: rgba(0, 0, 0, 0.25); bottom: -11px; }

.popover.top .arrow::after { content: " "; bottom: 1px; margin-left: -10px; border-bottom-width: 0px; border-top-color: rgb(255, 255, 255); }

.popover.right .arrow { top: 50%; left: -11px; margin-top: -11px; border-left-width: 0px; border-right-color: rgba(0, 0, 0, 0.25); }

.popover.right .arrow::after { content: " "; left: 1px; bottom: -10px; border-left-width: 0px; border-right-color: rgb(255, 255, 255); }

.popover.bottom .arrow { left: 50%; margin-left: -11px; border-top-width: 0px; border-bottom-color: rgba(0, 0, 0, 0.25); top: -11px; }

.popover.bottom .arrow::after { content: " "; top: 1px; margin-left: -10px; border-top-width: 0px; border-bottom-color: rgb(255, 255, 255); }

.popover.left .arrow { top: 50%; right: -11px; margin-top: -11px; border-right-width: 0px; border-left-color: rgba(0, 0, 0, 0.25); }

.popover.left .arrow::after { content: " "; right: 1px; border-right-width: 0px; border-left-color: rgb(255, 255, 255); bottom: -10px; }

.carousel { position: relative; }

.carousel-inner { position: relative; overflow: hidden; width: 100%; }

.carousel-inner > .item { display: none; position: relative; transition: left 0.6s ease-in-out 0s; }

.carousel-inner > .item > img, .carousel-inner > .item > a > img { display: block; max-width: 100%; height: auto; line-height: 1; }

.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev { display: block; }

.carousel-inner > .active { left: 0px; }

.carousel-inner > .next, .carousel-inner > .prev { position: absolute; top: 0px; width: 100%; }

.carousel-inner > .next { left: 100%; }

.carousel-inner > .prev { left: -100%; }

.carousel-inner > .next.left, .carousel-inner > .prev.right { left: 0px; }

.carousel-inner > .active.left { left: -100%; }

.carousel-inner > .active.right { left: 100%; }

.carousel-control { position: absolute; top: 0px; left: 0px; bottom: 0px; width: 15%; opacity: 0.5; font-size: 20px; color: rgb(255, 255, 255); text-align: center; text-shadow: rgba(0, 0, 0, 0.6) 0px 1px 2px; }

.carousel-control.left { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%); background-repeat: repeat-x; }

.carousel-control.right { left: auto; right: 0px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%); background-repeat: repeat-x; }

.carousel-control:hover, .carousel-control:focus { color: rgb(255, 255, 255); text-decoration: none; opacity: 0.9; }

.carousel-control .icon-prev, .carousel-control .icon-next, .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right { position: absolute; top: 50%; z-index: 5; display: inline-block; }

.carousel-control .icon-prev, .carousel-control .glyphicon-chevron-left { left: 50%; }

.carousel-control .icon-next, .carousel-control .glyphicon-chevron-right { right: 50%; }

.carousel-control .icon-prev, .carousel-control .icon-next { width: 20px; height: 20px; margin-top: -10px; margin-left: -10px; font-family: serif; }

.carousel-control .icon-prev::before { content: "â€¹"; }

.carousel-control .icon-next::before { content: "â€º"; }

.carousel-indicators { position: absolute; bottom: 10px; left: 50%; z-index: 15; width: 60%; margin-left: -30%; padding-left: 0px; list-style: none; text-align: center; }

.carousel-indicators li { display: inline-block; width: 10px; height: 10px; margin: 1px; text-indent: -999px; border: 1px solid rgb(255, 255, 255); border-radius: 10px; cursor: pointer; }

.carousel-indicators .active { margin: 0px; width: 12px; height: 12px; background-color: rgb(255, 255, 255); }

.carousel-caption { position: absolute; left: 15%; right: 15%; bottom: 20px; z-index: 10; padding-top: 20px; padding-bottom: 20px; color: rgb(255, 255, 255); text-align: center; text-shadow: rgba(0, 0, 0, 0.6) 0px 1px 2px; }

.carousel-caption .btn { text-shadow: none; }

@media screen and (min-width: 768px) {
  .carousel-control .glyphicons-chevron-left, .carousel-control .glyphicons-chevron-right, .carousel-control .icon-prev, .carousel-control .icon-next { width: 30px; height: 30px; margin-top: -15px; margin-left: -15px; font-size: 30px; }
  .carousel-caption { left: 20%; right: 20%; padding-bottom: 30px; }
  .carousel-indicators { bottom: 20px; }
}

body { position: relative; padding-top: 50px; }

.table code { font-size: 13px; font-weight: normal; }

.bs-social { margin-top: 20px; margin-bottom: 20px; text-align: center; }

.bs-social-buttons { display: inline-block; margin-bottom: 0px; padding-left: 0px; list-style: none; }

.bs-social-buttons li { display: inline-block; line-height: 1; padding: 5px 8px; }

.bs-social-buttons .twitter-follow-button { width: 225px !important; }

.bs-social-buttons .twitter-share-button { width: 98px !important; }

.github-btn { border: 0px; overflow: hidden; }

@media (min-width: 768px) {
  .bs-social { text-align: left; }
  .bs-social-buttons li:first-child { padding-left: 0px; }
}

.bs-masthead { position: relative; padding: 30px 15px; text-align: center; text-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px; }

.bs-masthead h1 { font-size: 50px; line-height: 1; color: rgb(255, 255, 255); }

.bs-masthead .btn-outline-inverse { margin: 10px; }

.bs-masthead-links { margin-top: 20px; margin-bottom: 40px; padding: 0px 15px; list-style: none; text-align: center; }

.bs-masthead-links li { display: inline; }

.bs-masthead-links li + li { margin-left: 20px; }

.bs-masthead-links a { color: rgb(255, 255, 255); }

@media (min-width: 768px) {
  .bs-masthead { text-align: left; padding-top: 140px; padding-bottom: 140px; }
  .bs-masthead h1 { font-size: 100px; }
  .bs-masthead .lead { margin-right: 25%; font-size: 30px; }
  .bs-masthead .btn-outline-inverse { width: auto; margin: 20px 5px 20px 0px; padding: 18px 24px; font-size: 21px; }
  .bs-masthead-links { padding: 0px; text-align: left; }
}

.bs-old-docs { padding: 15px 20px; color: rgb(119, 119, 119); background-color: rgb(250, 250, 250); border-top: 1px solid rgb(255, 255, 255); border-bottom: 1px solid rgb(229, 229, 229); }

.bs-old-docs strong { color: rgb(85, 85, 85); }

.show-grid { margin-bottom: 15px; }

.show-grid [class^="col-"] { padding-top: 10px; padding-bottom: 10px; background-color: rgba(86, 61, 124, 0.15); border: 1px solid rgba(86, 61, 124, 0.2); }

.bs-example { position: relative; padding: 45px 15px 15px; margin: 0px -15px 15px; background-color: rgb(250, 250, 250); box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 6px inset; border-color: rgb(229, 229, 229) rgb(238, 238, 238) rgb(238, 238, 238); border-style: solid; border-width: 1px 0px; }

.bs-example::after { content: "Example"; position: absolute; top: 15px; left: 15px; font-size: 12px; font-weight: bold; color: rgb(187, 187, 187); text-transform: uppercase; letter-spacing: 1px; }

.bs-example + .highlight { margin: -15px -15px 15px; border-radius: 0px; border-width: 0px 0px 1px; }

@media (min-width: 768px) {
  .bs-example { margin-left: 0px; margin-right: 0px; background-color: rgb(255, 255, 255); border-width: 1px; border-color: rgb(221, 221, 221); border-radius: 4px 4px 0px 0px; box-shadow: none; }
  .bs-example + .highlight { margin-top: -16px; margin-left: 0px; margin-right: 0px; border-width: 1px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
}

.bs-example .container { width: auto; }

.bs-example > p:last-child, .bs-example > ul:last-child, .bs-example > ol:last-child, .bs-example > blockquote:last-child, .bs-example > .form-control:last-child, .bs-example > .table:last-child, .bs-example > .navbar:last-child, .bs-example > .jumbotron:last-child, .bs-example > .alert:last-child, .bs-example > .panel:last-child, .bs-example > .list-group:last-child, .bs-example > .well:last-child, .bs-example > .progress:last-child, .bs-example > .table-responsive:last-child > .table { margin-bottom: 0px; }

.bs-example > p > .close { float: none; }

.bs-example-type .table .info { color: rgb(153, 153, 153); vertical-align: middle; }

.bs-example-type .table td { padding: 15px 0px; border-color: rgb(238, 238, 238); }

.bs-example-type .table tr:first-child td { border-top: 0px; }

.bs-example-type h1, .bs-example-type h2, .bs-example-type h3, .bs-example-type h4, .bs-example-type h5, .bs-example-type h6 { margin: 0px; }

.bs-example > .img-circle, .bs-example > .img-rounded, .bs-example > .img-thumbnail { margin: 5px; }

.bs-example > .table-responsive > .table { background-color: rgb(255, 255, 255); }

.bs-example > .btn, .bs-example > .btn-group { margin-top: 5px; margin-bottom: 5px; }

.bs-example > .btn-toolbar + .btn-toolbar { margin-top: 10px; }

.bs-example-control-sizing select, .bs-example-control-sizing input[type="text"] + input[type="text"] { margin-top: 10px; }

.bs-example-form .input-group { margin-bottom: 10px; }

.bs-example > textarea.form-control { resize: vertical; }

.bs-example > .list-group { max-width: 400px; }

.bs-example .navbar:last-child { margin-bottom: 0px; }

.bs-navbar-top-example, .bs-navbar-bottom-example { z-index: 1; padding: 0px; overflow: hidden; }

.bs-navbar-top-example .navbar-header, .bs-navbar-bottom-example .navbar-header { margin-left: 0px; }

.bs-navbar-top-example .navbar-fixed-top, .bs-navbar-bottom-example .navbar-fixed-bottom { position: relative; margin-left: 0px; margin-right: 0px; }

.bs-navbar-top-example { padding-bottom: 45px; }

.bs-navbar-top-example::after { top: auto; bottom: 15px; }

.bs-navbar-top-example .navbar-fixed-top { top: -1px; }

.bs-navbar-bottom-example { padding-top: 45px; }

.bs-navbar-bottom-example .navbar-fixed-bottom { bottom: -1px; }

.bs-navbar-bottom-example .navbar { margin-bottom: 0px; }

@media (min-width: 768px) {
  .bs-navbar-top-example .navbar-fixed-top, .bs-navbar-bottom-example .navbar-fixed-bottom { position: absolute; }
  .bs-navbar-top-example { border-radius: 0px 0px 4px 4px; }
  .bs-navbar-bottom-example { border-radius: 4px 4px 0px 0px; }
}

.bs-example .pagination { margin-top: 10px; margin-bottom: 10px; }

.bs-example > .pager { margin-top: 0px; }

.bs-example-modal { background-color: rgb(245, 245, 245); }

.bs-example-modal .modal { position: relative; inset: auto; z-index: 1; display: block; }

.bs-example-modal .modal-dialog { left: auto; margin-left: auto; margin-right: auto; }

.bs-example > .dropdown > .dropdown-menu { position: static; display: block; margin-bottom: 5px; }

.bs-example-tabs .nav-tabs { margin-bottom: 15px; }

.bs-example-tooltips { text-align: center; }

.bs-example-tooltips > .btn { margin-top: 5px; margin-bottom: 5px; }

.bs-example-popover { padding-bottom: 24px; background-color: rgb(249, 249, 249); }

.bs-example-popover .popover { position: relative; display: block; float: left; width: 260px; margin: 20px; }

.scrollspy-example { position: relative; height: 200px; margin-top: 10px; overflow: auto; }

.highlight { display: none; padding: 9px 14px; margin-bottom: 14px; background-color: rgb(247, 247, 249); border: 1px solid rgb(225, 225, 232); border-radius: 4px; }

.highlight pre { padding: 0px; margin-top: 0px; margin-bottom: 0px; background-color: transparent; border: 0px; white-space: nowrap; }

.highlight pre code { font-size: inherit; color: rgb(51, 51, 51); }

.highlight pre .lineno { display: inline-block; width: 22px; padding-right: 5px; margin-right: 10px; text-align: right; color: rgb(190, 190, 197); }

@media (min-width: 481px) {
  .highlight { display: block; }
}

.table-responsive .highlight pre { white-space: normal; }

.bs-table th small, .responsive-utilities th small { display: block; font-weight: normal; color: rgb(153, 153, 153); }

.responsive-utilities tbody th { font-weight: normal; }

.responsive-utilities td { text-align: center; }

.responsive-utilities td.is-visible { color: rgb(70, 136, 71); background-color: rgb(223, 240, 216) !important; }

.responsive-utilities td.is-hidden { color: rgb(204, 204, 204); background-color: rgb(249, 249, 249) !important; }

.responsive-utilities-test { margin-top: 5px; }

.responsive-utilities-test .col-xs-6 { margin-bottom: 10px; }

.responsive-utilities-test span { padding: 15px 10px; font-size: 14px; font-weight: bold; line-height: 1.1; text-align: center; border-radius: 4px; }

.visible-on .col-xs-6 .hidden-xs, .visible-on .col-xs-6 .hidden-sm, .visible-on .col-xs-6 .hidden-md, .visible-on .col-xs-6 .hidden-lg, .hidden-on .col-xs-6 .hidden-xs, .hidden-on .col-xs-6 .hidden-sm, .hidden-on .col-xs-6 .hidden-md, .hidden-on .col-xs-6 .hidden-lg { color: rgb(153, 153, 153); border: 1px solid rgb(221, 221, 221); }

.visible-on .col-xs-6 .visible-xs, .visible-on .col-xs-6 .visible-sm, .visible-on .col-xs-6 .visible-md, .visible-on .col-xs-6 .visible-lg, .hidden-on .col-xs-6 .visible-xs, .hidden-on .col-xs-6 .visible-sm, .hidden-on .col-xs-6 .visible-md, .hidden-on .col-xs-6 .visible-lg { color: rgb(70, 136, 71); background-color: rgb(223, 240, 216); border: 1px solid rgb(214, 233, 198); }

.bs-glyphicons { padding-left: 0px; padding-bottom: 1px; margin-bottom: 20px; list-style: none; overflow: hidden; }

.bs-glyphicons li { float: left; width: 25%; height: 115px; padding: 10px; margin: 0px -1px -1px 0px; font-size: 12px; line-height: 1.4; text-align: center; border: 1px solid rgb(221, 221, 221); }

.bs-glyphicons .glyphicon { margin-top: 5px; margin-bottom: 10px; font-size: 24px; }

.bs-glyphicons .glyphicon-class { display: block; text-align: center; }

.bs-glyphicons li:hover { background-color: rgba(86, 61, 124, 0.1); }

@media (min-width: 768px) {
  .bs-glyphicons li { width: 12.5%; }
}

.bs-customizer .toggle { float: right; margin-top: 85px; }

.bs-customizer label { margin-top: 10px; font-weight: 500; color: rgb(85, 85, 85); }

.bs-customizer h2 { margin-top: 0px; margin-bottom: 5px; padding-top: 30px; }

.bs-customizer h3 { margin-bottom: 0px; }

.bs-customizer h4 { margin-top: 15px; margin-bottom: 0px; }

.bs-customizer .bs-callout h4 { margin-top: 0px; margin-bottom: 5px; }

.bs-customizer input[type="text"] { font-family: Menlo, Monaco, Consolas, "Courier New", monospace; background-color: rgb(250, 250, 250); }

.bs-customizer .help-block { font-size: 12px; margin-bottom: 5px; }

#less-section label { font-weight: normal; }

.bs-examples h4 { margin-bottom: 5px; }

.bs-examples p { margin-bottom: 20px; }

#focusedInput { border-color: rgba(82, 168, 236, 0.8); outline: 0px; box-shadow: rgba(82, 168, 236, 0.6) 0px 0px 8px; }

.docs-dl-options h4 { margin-top: 15px; margin-bottom: 5px; }

pre code { display: block; padding: 0.5em; color: rgb(57, 57, 57); }

.hljs-comment { color: rgb(147, 147, 147); font-style: italic; }

.hljs-id { color: rgb(214, 79, 0); }

.hljs-class { color: rgb(0, 53, 138); }

.hljs-variable { color: rgb(101, 0, 163); }

.hljs-tag { color: rgb(0, 53, 138); }

.hljs-keyword { color: rgb(0, 53, 138); }

.hljs-built_in { color: rgb(0, 53, 138); }

.hljs-pseudo { color: rgb(101, 0, 163); }

.hljs-value { color: rgb(0, 163, 163); }

.hljs-number { color: rgb(0, 163, 163); }

.hljs-hexcolor { color: rgb(0, 163, 163); }

.hljs-literal { color: rgb(0, 163, 163); }

.hljs-attribute { color: rgb(0, 120, 189); }

.hljs-attr_selector { color: rgb(214, 79, 0); }

.hljs-attr { color: rgb(214, 79, 0); }

.hljs-name { color: rgb(0, 120, 189); }

.hljs-at_rule { color: rgb(240, 8, 0); }

.hljs-string { color: rgb(76, 138, 0); }

.lang-less .hljs-keyword { color: rgb(0, 53, 138); }

.lang-less .hljs-built_in { color: rgb(163, 114, 0); }

h1, h2, h3 { margin-top: 30px; margin-bottom: 15px; }

*, ::before, ::after { box-sizing: border-box; }

html { font-size: 62.5%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

body { font-family: Oxygen, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.42857; color: rgb(51, 51, 51); background-color: rgb(247, 247, 247); }

input, button, select, textarea { font-family: inherit; font-size: inherit; line-height: inherit; }

a { color: rgb(67, 117, 158); text-decoration: none; }

a:hover, a:focus { color: rgb(44, 77, 104); text-decoration: underline; }

a:focus { outline: -webkit-focus-ring-color auto 5px; outline-offset: -2px; }

img { vertical-align: middle; }

.img-responsive { display: block; max-width: 100%; height: auto; }

.img-rounded { border-radius: 6px; }

.img-thumbnail { padding: 4px; line-height: 1.42857; background-color: rgb(247, 247, 247); border: 1px solid rgb(221, 221, 221); border-radius: 4px; transition: all 0.2s ease-in-out 0s; display: inline-block; max-width: 100%; height: auto; }

.img-circle { border-radius: 50%; }

hr { margin-top: 20px; margin-bottom: 20px; border-width: 1px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image: initial; border-top-style: solid; border-top-color: rgb(238, 238, 238); }

.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); border: 0px; }

#carbonads { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; }

#carbonads { display: flex; max-width: 330px; background-color: rgb(250, 250, 250); box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 1px; margin: 1em; }

#carbonads a { color: inherit; text-decoration: none; }

#carbonads a:hover { color: inherit; }

#carbonads span { position: relative; display: block; overflow: hidden; }

#carbonads .carbon-wrap { display: flex; }

.carbon-img { display: block; margin: 0px; line-height: 1; }

.carbon-img img { display: block; }

.carbon-text { font-size: 13px; padding: 10px; line-height: 1.5; text-align: left; }

.carbon-poweredby { display: block; padding: 8px 10px; background: repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 0, 0, 0.024) 5px, rgba(0, 0, 0, 0.024) 10px) rgba(241, 243, 244, 0.4); text-align: center; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; font-size: 9px; line-height: 1; }

.ad { overflow: hidden; text-align: left; box-shadow: rgba(0, 0, 0, 0.075) 0px 3px 5px inset; width: auto !important; margin: 50px -30px -40px !important; padding: 20px !important; height: auto !important; font-size: 13px !important; line-height: 16px !important; background: rgb(23, 43, 74) !important; border: 0px !important; }

.ad-img { margin: 0px !important; }

.ad-text, .ad-tag { float: none !important; display: block !important; width: auto !important; height: auto !important; margin-left: 145px !important; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; }

.ad-text { padding-top: 0px !important; }

.ad-tag { color: rgb(185, 200, 224) !important; text-align: left !important; }

.ad-text a, .ad-tag a { color: rgb(255, 255, 255) !important; }

.ad #adsense > img { display: none; }

@media (min-width: 768px) {
  .ad { border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.075) 0px 3px 5px inset, rgba(255, 255, 255, 0.1) 0px 1px 0px; margin: 0px !important; }
}

@media (min-width: 992px) {
  .ad { position: absolute; top: 20px; right: 15px; padding: 15px !important; width: 330px !important; }
}

.docs-home .ad { margin: 0px -15px 40px !important; }

@media (min-width: 480px) {
  .docs-home .ad { border-radius: 4px; width: 330px !important; margin: 0px auto 40px !important; }
}

@media (min-width: 768px) {
  .docs-home .ad { float: left; width: 330px !important; margin: 0px 0px 30px !important; }
  .docs-home .bs-social, .docs-home .bs-masthead-links { margin-left: 350px; }
  .docs-home .bs-social { margin-bottom: 10px; }
  .docs-home .bs-masthead-links { margin-top: 10px; }
}

@media (min-width: 992px) {
  .docs-home .ad { position: static; }
}

@media (min-width: 1170px) {
  .docs-home .ad { margin-top: -25px !important; }
}

.banner { padding: 15px 20px; color: rgb(119, 119, 119); background-color: rgb(250, 250, 250); border-top: 1px solid rgb(255, 255, 255); border-bottom: 1px solid rgb(229, 229, 229); z-index: 3; position: relative; }

.banner strong { color: rgb(85, 85, 85); }

.callout { margin: 20px 0px; padding: 20px; border-left: 3px solid rgb(238, 238, 238); }

.callout h4 { margin-top: 0px; margin-bottom: 5px; }

.callout p:last-child { margin-bottom: 0px; }

.callout-info { background-color: rgb(244, 248, 250); border-color: rgb(188, 232, 241); }

.callout-info h4 { color: rgb(58, 135, 173); }

.callout-warning { background-color: rgb(250, 248, 240); border-color: rgb(250, 235, 204); }

.callout-warning h4 { color: rgb(192, 152, 83); }

.callout-danger { background-color: rgb(253, 247, 247); border-color: rgb(238, 211, 215); }

.callout-danger h4 { color: rgb(185, 74, 72); }

.docs-header, .docs-home { color: rgb(185, 200, 224); background-color: rgb(29, 54, 93); }

.docs-header { padding: 30px 15px 50px; font-size: 14px; text-align: center; text-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px; }

.docs-header h1 { color: rgb(255, 255, 255); }

.docs-header h3, .docs-header p { color: rgb(185, 200, 224); }

.docs-header h3 { margin-bottom: 3em; }

.docs-header code { background: rgb(11, 26, 40); padding: 2px 4px; white-space: pre-wrap; }

.docs-header p { font-weight: 300; line-height: 1.5; }

.docs-header .container { position: relative; }

@media (min-width: 768px) {
  .docs-header { font-size: 16px; text-align: left; display: flex; min-height: 100vh; align-items: center; }
  .docs-header h1 { font-size: 60px; line-height: 1; }
}

.footer { padding-top: 40px; padding-bottom: 30px; margin-top: 100px; color: rgb(119, 119, 119); background: rgb(255, 255, 255); text-align: center; border-top: 1px solid rgb(238, 238, 238); }

.footer-links { margin: 10px 0px; padding-left: 0px; }

.footer-links li { display: inline; padding: 0px 2px; }

.footer-links li:first-child { padding-left: 0px; }

@media (min-width: 768px) {
  .footer { text-align: left; }
  .footer p { margin-bottom: 0px; }
}

.less-team .team-member { color: rgb(85, 85, 85); line-height: 32px; }

.less-team .team-member:hover { color: rgb(51, 51, 51); text-decoration: none; }

.less-team .github-btn { float: right; margin-top: 6px; width: 185px; height: 20px; }

.less-team img { float: left; width: 32px; margin-right: 10px; border-radius: 4px; }

.docs-section table { margin-bottom: 20px; }

.docs-section td { padding: 0px 10px 5px 0px; }

.docs-content { position: relative; overflow: hidden; background-color: rgb(255, 255, 255); padding: 50px 60px 80px; margin: 0px -15px; border: none; border-radius: 0px 0px 4px 4px; }

.docs-content .container-fluid { padding: 0px; }

.docs-content { box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px; }

@media (max-width: 767px) {
  .docs-content { padding: 50px 20px 1px; }
}

.docs-container { margin-top: -50px; }

.docs-section { margin-bottom: 40px; }

.docs-section:last-child { margin-bottom: 0px; }

.section-content .docs-heading { max-width: 80%; margin-top: 20px; }

.page-heading .docs-heading { }

h1[id] { margin-top: 0px; }

.docs-section { font-family: Oxygen, "Helvetica Neue", Helvetica, Arial, sans-serif; }

.docs-section h1:first-child { margin-top: 40px; }

.docs-section p { font-size: 15px; line-height: 1.5; margin: 10px 0px 20px; }

.docs-section blockquote { position: relative; font-style: normal; font-weight: 500; color: inherit; margin: 0px; border-left-style: none; padding: 0px; }

.docs-section blockquote > p { line-height: 1.5; color: inherit; padding: 0px; }

.docs-section blockquote > p:first-child { font-size: 18px; }

.docs-section td { padding: 0px 10px 5px 0px; vertical-align: top; min-width: 150px; }

.docs-section img { max-width: 100%; }

.section-content { position: relative; }

.sidebar { display: none; }

.sidebar.affix { position: static; }

.sidenav { margin-top: 6px; margin-bottom: 30px; padding-top: 10px; padding-bottom: 10px; text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px; background-color: rgb(247, 247, 247); border-radius: 5px; }

.sidebar .nav > li > a { display: block; color: rgb(54, 85, 110); padding: 5px 20px; }

.sidebar .nav > li > a:hover, .sidebar .nav > li > a:focus { text-decoration: none; background-color: rgb(232, 235, 238); border-right: 1px solid rgb(216, 221, 226); }

.sidebar .nav > .active > a, .sidebar .nav > .active:hover > a, .sidebar .nav > .active:focus > a { font-weight: bold; color: rgb(29, 54, 93); background-color: transparent; border-right: 1px solid rgb(29, 54, 93); }

.sidebar .nav .nav { display: none; margin-bottom: 8px; }

.sidebar .nav .nav > li > a { padding: 3px 30px; font-size: 90%; }

.sidebar .glyphicon { font-size: 12px; margin-left: 10px; }

@media (min-width: 992px) {
  .sidebar { display: block; padding-top: 65px; }
  .sidebar .nav > .active > ul { display: block; }
  .sidebar.affix, .sidebar.affix-bottom { width: 213px; }
  .sidebar.affix { position: fixed; top: 15px; bottom: 0px; overflow: auto; }
  .sidebar.affix-bottom { position: absolute; }
  .sidebar.affix .sidenav, .sidebar.affix-bottom .sidenav { margin-top: 10px; margin-bottom: 0px; }
}

@media (min-width: 1200px) {
  .sidebar.affix-bottom, .sidebar.affix { width: 263px; }
}

.docs-nav { text-shadow: rgba(0, 0, 0, 0.15) 0px -1px 0px; background-color: rgb(29, 54, 93); border-color: rgba(0, 0, 0, 0.2); box-shadow: rgba(255, 255, 255, 0.07) 0px 1px 0px; }

.docs-nav .navbar-collapse { border-color: rgb(17, 31, 54); }

.docs-nav .container .navbar-brand { margin: 12px 0px 0px; width: 100px; padding: 0px; }

.docs-nav .container .navbar-brand img { display: block; max-width: 100%; height: auto; }

.docs-nav .navbar-nav > li > a, .docs-nav .navbar-nav > li > span { color: rgb(185, 200, 224); }

.docs-nav .navbar-nav > li > a:hover, .docs-nav .navbar-nav > li > span:hover { color: rgb(255, 255, 255); }

.docs-nav .navbar-nav > .active > a, .docs-nav .navbar-nav > .active > span, .docs-nav .navbar-nav > .active > a:hover, .docs-nav .navbar-nav > .active > span:hover { color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0.2); }

.docs-nav .navbar-toggle { border-color: rgb(29, 54, 93); }

.docs-nav .navbar-toggle:hover { background-color: rgb(17, 31, 54); border-color: rgb(17, 31, 54); }

.btn-outline { color: rgb(29, 54, 93); background-color: rgb(255, 255, 255); border-color: rgb(229, 229, 229); }

.btn-outline:hover, .btn-outline:focus, .btn-outline:active { color: rgb(255, 255, 255); background-color: rgb(29, 54, 93); border-color: rgb(29, 54, 93); }

.btn-outline-inverse { color: rgb(255, 255, 255); background-color: transparent; border-color: rgb(185, 200, 224); }

.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active { color: rgb(29, 54, 93); text-shadow: none; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }

.anchor, .anchor:empty { position: absolute; top: auto; bottom: 0px; left: 0px; color: transparent; font-size: 18px; padding: 10px 10px 10px 25px; width: 60px; }

h2 .anchor { margin-bottom: -3px; }

h3 .anchor { margin-bottom: -5px; }

h4 .anchor { margin-bottom: -7px; }

h1, h2, h3 { position: relative; padding-left: 60px; margin-left: -60px; }

h1 .anchor:hover, h2 .anchor:hover, h3 .anchor:hover { color: rgb(19, 19, 19); visibility: visible; text-decoration: none; }

.anchor-target { position: absolute; margin-top: -80px; padding-top: 80px; width: 2px; }

.anchor-target-small { margin-top: -40px; padding-top: 40px; }

.section-content .source-link { top: -27px; left: 10px; width: 100px; padding: 15px; color: rgb(153, 153, 153); font-size: 18px; text-align: right; }

.section-content .source-link.active, .section-content .source-link:hover { color: rgb(67, 117, 158); text-decoration: none; }

.section-content .source-link.right { float: right; }

.popover-source { }

.popover-source .glyphicon-new-window { font-size: 12px; padding-left: 6px; }

.popover-source, .popover-source .glyphicon-new-window, .popover-source:hover, .popover-source .glyphicon-new-window:hover { color: rgb(67, 117, 158); }

.popover-source.left { margin-top: 2px; margin-left: 60px; }

.clearfix::before, .clearfix::after { content: " "; display: table; }

.clearfix::after { clear: both; }

.center-block { display: block; margin-left: auto; margin-right: auto; }

.pull-right { float: right !important; }

.pull-left { float: left !important; }

.hide { display: none !important; }

.show { display: block !important; }

.invisible { visibility: hidden; }

.text-hide { font: 0px / 0 a; color: transparent; text-shadow: none; background-color: transparent; border: 0px; }

.hidden { display: none !important; visibility: hidden !important; }

.affix { position: fixed; }

.visible-xs, tr.visible-xs, th.visible-xs, td.visible-xs { display: none !important; }

@media (max-width: 767px) {
  .visible-xs { display: block !important; }
  tr.visible-xs { display: table-row !important; }
  th.visible-xs, td.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-xs.visible-sm { display: block !important; }
  tr.visible-xs.visible-sm { display: table-row !important; }
  th.visible-xs.visible-sm, td.visible-xs.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-xs.visible-md { display: block !important; }
  tr.visible-xs.visible-md { display: table-row !important; }
  th.visible-xs.visible-md, td.visible-xs.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-xs.visible-lg { display: block !important; }
  tr.visible-xs.visible-lg { display: table-row !important; }
  th.visible-xs.visible-lg, td.visible-xs.visible-lg { display: table-cell !important; }
}

.visible-sm, tr.visible-sm, th.visible-sm, td.visible-sm { display: none !important; }

@media (max-width: 767px) {
  .visible-sm.visible-xs { display: block !important; }
  tr.visible-sm.visible-xs { display: table-row !important; }
  th.visible-sm.visible-xs, td.visible-sm.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm { display: block !important; }
  tr.visible-sm { display: table-row !important; }
  th.visible-sm, td.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-sm.visible-md { display: block !important; }
  tr.visible-sm.visible-md { display: table-row !important; }
  th.visible-sm.visible-md, td.visible-sm.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-sm.visible-lg { display: block !important; }
  tr.visible-sm.visible-lg { display: table-row !important; }
  th.visible-sm.visible-lg, td.visible-sm.visible-lg { display: table-cell !important; }
}

.visible-md, tr.visible-md, th.visible-md, td.visible-md { display: none !important; }

@media (max-width: 767px) {
  .visible-md.visible-xs { display: block !important; }
  tr.visible-md.visible-xs { display: table-row !important; }
  th.visible-md.visible-xs, td.visible-md.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-md.visible-sm { display: block !important; }
  tr.visible-md.visible-sm { display: table-row !important; }
  th.visible-md.visible-sm, td.visible-md.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md { display: block !important; }
  tr.visible-md { display: table-row !important; }
  th.visible-md, td.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-md.visible-lg { display: block !important; }
  tr.visible-md.visible-lg { display: table-row !important; }
  th.visible-md.visible-lg, td.visible-md.visible-lg { display: table-cell !important; }
}

.visible-lg, tr.visible-lg, th.visible-lg, td.visible-lg { display: none !important; }

@media (max-width: 767px) {
  .visible-lg.visible-xs { display: block !important; }
  tr.visible-lg.visible-xs { display: table-row !important; }
  th.visible-lg.visible-xs, td.visible-lg.visible-xs { display: table-cell !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-lg.visible-sm { display: block !important; }
  tr.visible-lg.visible-sm { display: table-row !important; }
  th.visible-lg.visible-sm, td.visible-lg.visible-sm { display: table-cell !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-lg.visible-md { display: block !important; }
  tr.visible-lg.visible-md { display: table-row !important; }
  th.visible-lg.visible-md, td.visible-lg.visible-md { display: table-cell !important; }
}

@media (min-width: 1200px) {
  .visible-lg { display: block !important; }
  tr.visible-lg { display: table-row !important; }
  th.visible-lg, td.visible-lg { display: table-cell !important; }
}

.hidden-xs { display: block !important; }

tr.hidden-xs { display: table-row !important; }

th.hidden-xs, td.hidden-xs { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-xs, tr.hidden-xs, th.hidden-xs, td.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-xs.hidden-sm, tr.hidden-xs.hidden-sm, th.hidden-xs.hidden-sm, td.hidden-xs.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-xs.hidden-md, tr.hidden-xs.hidden-md, th.hidden-xs.hidden-md, td.hidden-xs.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-xs.hidden-lg, tr.hidden-xs.hidden-lg, th.hidden-xs.hidden-lg, td.hidden-xs.hidden-lg { display: none !important; }
}

.hidden-sm { display: block !important; }

tr.hidden-sm { display: table-row !important; }

th.hidden-sm, td.hidden-sm { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-sm.hidden-xs, tr.hidden-sm.hidden-xs, th.hidden-sm.hidden-xs, td.hidden-sm.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm, tr.hidden-sm, th.hidden-sm, td.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-sm.hidden-md, tr.hidden-sm.hidden-md, th.hidden-sm.hidden-md, td.hidden-sm.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-sm.hidden-lg, tr.hidden-sm.hidden-lg, th.hidden-sm.hidden-lg, td.hidden-sm.hidden-lg { display: none !important; }
}

.hidden-md { display: block !important; }

tr.hidden-md { display: table-row !important; }

th.hidden-md, td.hidden-md { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-md.hidden-xs, tr.hidden-md.hidden-xs, th.hidden-md.hidden-xs, td.hidden-md.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-md.hidden-sm, tr.hidden-md.hidden-sm, th.hidden-md.hidden-sm, td.hidden-md.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md, tr.hidden-md, th.hidden-md, td.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-md.hidden-lg, tr.hidden-md.hidden-lg, th.hidden-md.hidden-lg, td.hidden-md.hidden-lg { display: none !important; }
}

.hidden-lg { display: block !important; }

tr.hidden-lg { display: table-row !important; }

th.hidden-lg, td.hidden-lg { display: table-cell !important; }

@media (max-width: 767px) {
  .hidden-lg.hidden-xs, tr.hidden-lg.hidden-xs, th.hidden-lg.hidden-xs, td.hidden-lg.hidden-xs { display: none !important; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-lg.hidden-sm, tr.hidden-lg.hidden-sm, th.hidden-lg.hidden-sm, td.hidden-lg.hidden-sm { display: none !important; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-lg.hidden-md, tr.hidden-lg.hidden-md, th.hidden-lg.hidden-md, td.hidden-lg.hidden-md { display: none !important; }
}

@media (min-width: 1200px) {
  .hidden-lg, tr.hidden-lg, th.hidden-lg, td.hidden-lg { display: none !important; }
}

.visible-print, tr.visible-print, th.visible-print, td.visible-print { display: none !important; }

@media print {
  .visible-print { display: block !important; }
  tr.visible-print { display: table-row !important; }
  th.visible-print, td.visible-print { display: table-cell !important; }
  .hidden-print, tr.hidden-print, th.hidden-print, td.hidden-print { display: none !important; }
}
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: image/png
Content-Transfer-Encoding: binary
Content-Location: https://lesscss.org/public/img/less_logo.png

‰PNG

   IHDR     ê   ó–|ß   tEXtSoftware Adobe ImageReadyqÉe<  mPIDATxÚì]`E~»w	5`—T@¥JSéŠTiş ]ÅBA°PÄ®tl)@®REE‘b ‚(% Ø„z·ÿ¾Ù™İ¹Ë]r}÷îæó–#$»ofg¾y@@@@@@@@@@@@@@@@@@@@@@@@ÀrâèùbıY/×ñ¾¿Ejı«uXŠ£É#Åè3+ÜWA""¿şÇå:,‹y&      K‹v†é~-sÉNÅıóh×™C'½ÎS%—^;¹Ï…%B@@ Şö4~Op[ÿmXÓmÎ+d…÷ín’8ÒÀ&J*îŸKAşŞQ³EŸaxtE¢¿Z¶Û²=I$-™“X¬TyÀÄ¢U´oW¿W’‰ˆm(N	m©ËÍÉ²å©‚×çÏûóÀæ…ç<&ƒ%
wc¤!›Šûç¼k#fÜqO ºwï^ªÿşÕğ5jÔhÈ~è•W^é²ùÛl¶RE‹­f%%Œ˜ğ1üôË)LØˆkYV9ƒåC,   à7‹ \Â	NUjß\¦<u¯×ïÎÊÊ:äp8ÒøÏşùçŸ]ì:55õà…ÒöíÛwú¹çKÂö($däH€»{‚}šé
QâÍ7ß¬Ñ¼yó®½öÚ2¥K—nl·Û“Š)R=š_•ÜìÈÉL×”XLcXm:P‰ˆò€p:àtä)…%J”Ğ+V$_ÛµkcÇ…ÜÜÜÔœœœÓéééÿı÷ß³;wî<ñğÃÿ†ûø’*l‰V%‡#ÜüçQG*¬N øOv³.Ø=Xt_×Ì™3k·hÑ¢M¹råê'%%İd³Ù’bíu¹”‘ÓşÓ¼X$:¨¢T&aKPtJ’ 1Nã`ïÈÍg^dçd‡ôw$$$T@A’Q¦L¨^½:<ôĞCpşüùß?~àĞ¡C»úôé³³Fdq¤!×ƒ•Br³R8¹Ï-O"ì±4vïŞ}w¥J•Ú]~ùå­dY.ë/Lú¥,ø'í¢6Ù
Ø:`î!,ñ` 1NG.!çÓ2"ò›Õ=ç”ºuëvìİ»÷kıõ×7¿ÿşû4XË·"àw;¸FÒ&pV‡¢xñÒK/]¯2À®eË–½×n·'ÇÕë’—K„\ÛóĞn§ı…S	ºqÉ!ô5×CÅiÊm\}õÕ-PÇèsçÎ­|å•WVÍ=ûıkd5—èugÈ×L:‡‡'³¬ºÍ°c³#ÅT)Iå²¡C‡Ö<}úôô_|ñ›äää'â<EY6Šâp¨äÛ©	ùOäo
ÄĞD¡ë¡¹« ZÂÕÃíƒ³fÍúôĞ¡C“ºvíZGıøZU® r·¯ãö;¸&XQwN}ë­·*üı÷ßã§M›¶¦\¹rÅ+ã‰ 
ê    ÖC+­…U«V½såÊ•ï?~üõ \.´l†»Û‚İ2²âô:éÄ‰ƒ+V¬8L¼ìÕ0ìŠ—Ì ‘ƒ!  oë¡•R×]w]û7ß|³Y=æ7mÚt%YéTèâÈ¤×diIw†•,Ì\ƒä™qJ¨RzæÌ™.]º´J‡ü$MtÌL§xoŸ"DH,	xùÌŠÀ¬À&Mš=sæÌŒ[n¹¥ŠúQYU®ÂıJ	n´ƒEİ–walÚ´é®Î/V¬XUÁbeË–­±}ûö·†vC4Ş¿Ù.Æ¨l`€*FÙ¤¤¤ô¨^½úT1Í|³F4\añ¹òk`¬ƒ%J”¸fêÔ©ãF¾şúë=ìÍ—¸kK¹3Ì$îE¢Ø½`ÌC©;wvQÉÃ8ñFøÌ@R
ˆõĞÛŸ­•<”?~üäŒŒŒ—gÏ}œ~Ì…\îÚ2-éÂ˜9sfÕò     HLL,1nÜ¸ÇjÔ¨Q"ZîY¶ÀïGauŠuéÒ¥Ì#<2ML'xÂW\qıêÕ«­FÄÕTğšWZªV„™Bâ••%‹.\¸pœÊÄÊ‹©$    o¨R¥Jı×_ı7QŠ
ºøY/(Ùm?;„¾ùæ›F%K–l#¦P É\B„Q^‹wÀ€½£á>Í Ìê sL
{[”¸õÖ[Ÿ$ D<ÂÓµ€€€€X÷,õ }õÆ‘D Ûâ20J_cÉë¢TL¯é,o'‹~øá‡wğ}Øü|i¼%aH H„€€@|’ˆ(^û4h€nŒïÀ5u›o±j•øy¶™´É2.ŒvíÚõ³?·Eˆ!B„Äš£téÒWL›6í6+ß£u $îw£ë‚´ä¾êª«ZB}(èZ@@@ ŞÑO4´lÙ²–úe3h.D·oËÜ~jÊ£FÚÁg^0Q¤oß¾wŠ©/     ` fÍš5*W®\Ší•ª$‚Q¹Ùt‚%\åË—¿[LWŒ=ºšUïÍL†^¾ºhÑ¢Ä4	 ÄFG-W¤ö»‡kxY]ÖÀØxªÛo¿ıFõË·Üş)s×¦vè4³*Á¶aÃ††Ñ6 §NŸ…“ª0T,_’U°Ò.fÂ}‡AqæéÄ¢FÕ tRÉ¨y†n¸¡Gø¸ÉÃÁ<nAõêÕ-›ºyàĞ¯°m÷pàğ1BğÚ•ğjwäĞaäãŠ·U@@@ÀB8øk*Ü÷øÈËL#væeA”J*5«V†šÕª@-õk“ÛëXò ˜””tÕM7İTüÈ‘#—¬vo¦·ó.^¼xkYÎÁœ…«`ı×Û‰¥;I#w²½ˆyĞ„$ÙÄ›*   `ö†BâøU’µC»$ÛÕµ;-Üú÷^ÌÌ…ûa@2Ñ³KkèÑé.(dV;w¾~Ê”)G@ËÂ`Ÿ‘&–ˆwé4=ˆ²hÑ¢– Ò/ÂĞg§@½»ûÀÜVCêÙ@²%¨/‘‡ü’Hşˆlµ¦¦"şA@@ ™üd"’Í¦¯ÕŞ×sM=/L~nkÛ¦ÎZd™ÇiÙ²%º1ğ¤šFFk¨å‘1w†é.+TŸDWÅıC_€SgşôcC¶z–± ñ_êYşù…ô˜2ëcâ¶?í…¨Š™ˆ$ìñ® ´<t¾ÿIH¿”¥»(d["aª‘UÙ«lË7ÁœN‡˜#Ù­õîˆJRñiz ÿ/ƒ,iÛ›b+¢ÛñÚ‘§®íyÖNcÁTpmW´ÊÑ;<
ı‡ƒ•ïO0õ©ªU«VUı²	´nœ¥èÇXÖú"·êçFúôh*xíµ×Lw_<ğø‹vñÈ	EtaK(ªJ1JìÄ‡¦§#—ˆF8,Ì¶âŒFÈz• P—pã¨8Õÿ9\Kñ`ˆDá3aÇ¿À»‹ÖÀ£½ï1íyœN'>i:Éˆ‹`ÄCä«ë""‚©¢^½zåÍüıÛvÿÄeVtlW,|ÌWòı?o
˜œ(,   ñU‘_=_¼Î»~>uÎèÑ±%ÉÜ0W\qÅåVÔs\»0æ,\©[ĞmÁ¬²úUNÔ®Õ¿àØ+Ÿy!Q+	¢ôDmD3N8´Aèë²v- ¯Ña+dEt:@²9\ÖÔŒ,',]û<Ò³­)OsÙe—]N÷koY¦ôÅˆ[q!í"¬ÿj»î~ Q¸”@ØTò 'h½Kydc\8_™SiœÖãF‘FÉ&«ÄAq³Nts’8w,]ó­i‚ÂæF X_F "9^ç×º¯¶Š—L@@@@À'¤üòœ:sN(BX  ¶íúÖˆ¢
ó…™«¯%ƒ[™Ú/µ`ªlÜ•âíD„€€€ ]¥B¿ÃØpO`Vj§úuû÷¡G¹kÍºy¾›µûö$D$±ÿğ¯ZÕ2Ze£vàİo
s!¦÷1ÉÇééZAø¼ß"y`nŒ‘“lZÖ‰ƒGNXá$+¢“xFX<J@@@@@ÀW¤ür\(C\Z ¼“aëˆoHÌ0
)…­m“X
ûô_„zâ@`õIÏ(¬ÆƒÖ-÷hå{ˆB*!#“Ğõ²İ®ˆÿ„R8Ä¥S8GÜº0g…äù0Ï_K^>·î?V¡€…ÆmÅ«—Ìòcãc'ôğï72õl$¨rç¿@Ãº7ö ñ\‰R)äeb…G$·ïUÏ×¦=‡Rğ½ÅK†?…b"»ü€Õxö,YtŒâfì„ş¢/,ñSbéı’ˆ•‹{¡€÷¨_ª¥[!Ê û»Ã®€#¡ÿèJD–	¡ÓJMÚô^äš«ı ‰ŒK¿Î
_,Ëé¤¦g++X†ôS‹äz­÷M‘èß¹~,mMÖ£X»xÔ?Dp,Ä¾ - åZ<Š7MIbÂXtsÒ>¬W¯8é¥Ã¨]¯(úçìÏ¥J‡êU´òêŞ¤^¡Ì•D¼açGôëSü©gÿ´‹™pğ×S^¦aÃ™<q®I´t½V¬†5ûq3ÕFåĞx00FëhãR½J2”N*¦.U²X·€ã‚Âp!İ#÷¿ó¾4DéØ…Xÿø>$—½Òòúw]Õcà="¶NQ¢tt.„Hj¨‚‹![AAÿöà¯©daÄ…rÇGÈ×´ŒLp¼õ©xnÏ7ÿ¢‹q#ªV¹<4RõZ¡ÌA?`Ämh)GOÑñKp,¬0vşFw+ùŞ_B(õÏ¾¯ÿXzˆû±>hîlã­1\»‹Ãõ}ôœ¨XÀ#¦xù@qíÍD€7Ã*N'9Ui×yú‰ÊéÈ…êê†Ô¶ehX»JÄ6#ídVHë¦µaøƒŒTœ‚?…õ›wÁïjÖ-Ğ
Ñ°ºú|ïm¾Éœ%Œ;İZõ$…§Xş¤ëd'ZÃTNÆGı;´ü4¬SD®7¬}£n2¸Iz›hiÂ±;pälß³RÿøÛÏ±“¸Î½avsø¡Dõ½hsG=KéßoúO9ü¤¨_Ó?¯[—‡×±ü_‡¬´æa!ëMRd»F ğšo¦%`.yğêªpäi×*ihP»2toß”,Œ¸IYxšCy¨Û–ë¿Ù6ï†/¶şŠ#¬.î3ºP*v×¦nÌTk"Á6§|æñ<—ÍÇ£uÓºd“Àñ‰àÆÆ“‹Sgş„íß§À½)°qëp13³±³qÄ"LnõèÖ¶!Ñ£zU-õ~øª|wPÿøîìüé(œşóÕ¹{Gø8	Îåám,¤09A ‚c–Šî9.r5‰¹F”‚â¬‚RI% GÇ–DğD»lİVxï“/ ıR¶ŸsÉ
&Y¥ĞÏqèÖFŸv¢~¶%—»z ¨c‡H9z’ŒZ—;ã§ŞBaZ/\ÿøN ´nV;*HCaïNÛ·aúß¹ï0,Û°CÕÿi‹¾#‚@Ä‚EõJº‰Lká-ò²Z1YÒ‰ˆBSg’åM¯ÌUÑ°nUèŞ¶ü¯Mƒ¨vÊ^#îBdÙúmğúœ¥ä”ËŸ¨$Ş*†BÌl”64sLá\chrÒS¯3/º·oİÛ5U	Ä1»lÔ¸±"Ôx¢7¹F¿ıûK7Á†ov«×cçÉÍÜÚB>—ù…($úGâöäÃ]c_ÿª<Ü£5Ñÿßı Ÿ|¾üò»niğäòà-FZ1(ô/äÈÇh†d+ …·@¤ˆƒö…7Éæé®Š·T†áıïF*ˆ%to×„ÈÜ>…×ç~B/‘/5|®vä¸Fl„9fX7w5;Õñqæe«ãr3¼8¬T¿19®¦-ô_Ö“šÙ—~öµJ
·{qQq)â²±äj™´ş‡÷ïDÜñ¦ÿ‡º·"rà—ßÔ÷è3Ø¨’¹´ŒKù¶QÇ¢ˆvîiJ&d›¢o{¾é_@¨\ †?ØºµmÓÏ9 ogèÙ¹L»Ş]´&Š¬)WÂÔ‘}EI_ë× òÊ3ÃûŸ|K×}§Ï…·é#>?¤!¡ñš7W‚i¯×ã^Ÿó‰/! D˜V¬4*ëÛ
¾f@åÿ~3­ZQYŠ²`“,Zú_Ëˆ¤•Yèë}å©şĞã–0üå™pğh*=p:H ıKÛ
+.æñpdj(®–!ší¢Y†ğğ}wÃ¶›ññ}S/n¸¨Ömƒ7æ.ƒSgÎiÖ:vx2–éÉØ8û§ÿÖwÔƒ©£û	ı{xX¼ÑÒµ[`éçßl´
±l;@ı'H…èß‡5V ~	„Âş_òú7[Š—¤˜ú$ŞXLÁÏbŞ». ›ds¡ê×Âc‚ê7VŒË—±ÆÍ×Ã¦ESà…ÉïÁÜ?SõcÄ‚Ÿ®B}ºd3bQı¡ÏÔ ãB¯“s'%K€©c‚6wÔ+g! 1!ª”¹åÈ–`lZ\–—Ñ¨IòIÿ/<Şºwh&\îëp‘;»C¿¦êîÒÙB.Xÿ¾¬ùqn(¨FAı§¬BÈ³˜}ÏüõCİïRÇnâTñÊÈG ñm5aÄ+s =Ë‘o¥X÷1ÂÚï¾6(*2_¬‚õ_ïÔ	| ë»FkÃ'o=ij‡hÃÃ¿©rL‹‡bmA Le|1(‡,©¬’Š×Ç>­›ÔzâĞ¶eCH®P†¿8ür.L±%ê™šyœZ&@
²†	o6§ş¹ÙP­RY²y	“¹X²j#qÍñ.'¯ŞÃ"êIÿKgŒú÷Wÿ«7ë¥{D/DÅ$ğ"N½?.Œ˜v†‚.‹%oäÁ0emùœ¡ÚeÀ‘aHn¦*ÙD0_×­®ï@I-ÚŸˆú³H”¿*dóš>Rl^~âBúEX»é[âšÓÆ‡fP06Bÿ¡ÅºMßéqDz–—à‚@„x—ÄÒ³DFĞ»tú3d“ğÒI%`Õ¼IP£j%sÆO¾ê=ø‡õ_nZÿH„ş$_m…“§ÿãû! „¢Ï£ñY"b}Ğ‚Á´œuÍêàÈÉ„»×„OŞ~2ê+åED”„Uï‡ê•+€37œªuÁ?Sİ¢¹œéÜg+]§¢´âi]KÅ„Û",^µQ«3#=wP0 V/Æ¹›ˆõHè?„n›ú7Jaû¼~
ş D‡ö@>¶g	»(ºÙDôå¢`™ã÷&äÁOà)tåû šJ"9Yª\"¢ˆl"
qgp¦rÇ‰‰1^xwÜcbó
'OŸ…m»~Ô6(ÿ Å©ÁBR’M¼¼/xññûDÀdX‹ ÂôÏÇ)~¬Ÿ‚@ÄI+zÜ˜ÖöÆóÄ[¨%¢TIøôÃ7¡fµÊa'¬cĞ¨^5¡ğ ±nÓ–BÖ‡‚õß¦y=‘ªŒõgå:HKKXÿÂ}!„€É„†LjA“Z$ù‹Oôê	‰˜>î)H*H]Yš‚º2˜ÎµâC…,xœ›‰òrä@¹«KÁğÛEÙó—j¥òe™
ÓDë¹#õÜô_²˜¦~@(1(÷ïúBÀ:äA$g±I^¹<,{g¬p[„5n®o¿:Bs]×%êÄt®E³>
JãåÔÓñça…CÀqàĞQ8uú¬¾I±OÌï®µÿ6ª‡ºëøí„ë(\H»ë¾üÎ'ı‹G‚@XHŞŸ<BD’‡í[5…‘CéÏÄ†e±Ö´,ÒX¼r}Àÿ»µ>|_k¡Ä ô¿N(Aˆp”=Q<^ºØüûşˆ=G ÏÊ{à‚ğøHr4Ë¾;n°¨^&Œ|üA¨qóZ±"”¼\ãË3ó8?O\Æ‹w3åÀˆ‡:¥‰u_nåN¾6½§.øÖŒÂ!q×ÿNBAbÉª…ëhŞ…?e(M]è­‹8n¦¥Qètnè­×§|k]°`O˜H„ßÏú{`EpXÃxÿ–ïÖˆ¹â§RÏ’¯'Õ¯îhÚ .ùÚ„~µL{	ZŞ;˜.’l¹ a*'9Ø¹F\n“€—Ss3!Ê_s™e'Ù]HK‡ı‡~õú}M¹12c¼<œ<}N{éH ­>É2.tõ?™şKK€¶í1ÂôØºëËê³_ö:Vˆş%cÙ–|YÃ-¸æ!ëÀÍèÉGîµŞb˜úñ‘âB¸m×>â3-“¸ëŠÊ’…Êö­î f#¹üµğÌ~ğÜÄYAıœG{ßcSü¦-d|0  « ±â7µduÜ*–/K®kV»1lãF‚÷D»–,ãæÛ¯êÇ`›ªûPè¿T©$¨¥ê½Vµ*P³úd,Â`ÜG‚@˜fÉa½-r‰9ã^ÓßR·‰‹
.ŠZ •Lê‰àk¿ÒÔ³ÿÂ'Ÿ~Edè³S¡×½í g×ÖĞä¶Ú¦>ÛÀû»ÂâUàĞ±Ó ååP«ƒôÏ`l\Ûzãl¥Ÿ¨Z7«cò)÷,ÌY°œ<G’:I34ó­¯Áöï ¨˜òÎG”–!D¢éíu¡ñm·@MRå3â«­F›uìJï]¯? ×óÂĞÿÃ=Ì}@"Ù#ø`({GHQI‚@{ún§ºß°y—ş8BÄC¬ÿ%+7ø¨<)Dhv?/×áş·V{–`à4šcé‘äİ B™+,BÖÁ¤i¨‹â9®°ŒÍXh¤ÀP}òé&X²úhrû-ğÚèÇÔ…°²iÏ9nÌ`èÚÑ¿¶hÚAr&êÏ¨x2½Ò€ê7&›§‚×äéó`ö‚et\hÑ)ØÆ`ÁÔ³»ôM-¹ÜÕĞøÖ[ ı]¡ñíµIåÏ@æYZz†ŞØLVõ¯7<Ãöë¬™OáTı#á®^%Ù´¹ƒïÇìùŸ¨÷)äïˆ'¤_Ê!ºgúÇçowg#õ=ªíÔ1Dÿh59uæ\áú—¥­±‚@ø½ñ*$V ÆïjT¯ªé§)¶ Œ}ímİ«Y
kê+¤çm»‚]ıî…qc‡šò¼Mn¯=ïmK?ßìá>®Ñ¦Y=ÓÆ¨ßàgÉÂŸÿ—Àæ-’Ë%©õîíîlL²\Ú·jæ³»c­Kñ¨‚ŞÇüAImî0'¾É[§>Cô¸’Ğ¾#¾ë?-ı"Ñ}0ú_¼bú÷wm´úšBfQOEæÙ’¼•+õuï°BQ2o÷‘{ãÚs;hàd^¼1öQÓ'õìùËy f‚ÅÉÆŸ¨äısù¢2ş-Ÿ¹or`îGŸ“í‡3^ROµ×Fü¹ŸÜ>Y½‰Ş–•¡İ->£{DÉe42!Ğõ€ºiuê3Ò3²Ô±ĞLÍ²Ë³6åŒK€sXqê§Ng.lüv/‘aÏ½=»¶öw5%'ä‚6âõ›¶‚„÷Ïî1kÑÿ²×5ÄëƒF‡‡W_î±…ê	şÛİÕ„‰ï.Ä´‰*DÿJÀ·)
QZ€@ğ³O*¥BAtZm>’ß©E’£åsÙÍ.ŠcÇMS“ÚbBç5óƒ¢oT7oâß3báãâ¨ğä‰eäj‘Ş„–]ÁêùS fµ*}şär×À}[·ŠLÓ9É}b<u3‘…Tr}taDCF'&s~,ä„¢Dò¾06À£äĞ“±ñe1/Ée¯]Z©Ò†®æß¼h\İhùy¥õ]¼Ş…iû=ö¬Ji.#ö^~¡yGB¥æêxnÂ,•D´‚÷ÿ/Ÿş1(İGä~Ñ¿(Z˜Z¢B…
ÕÍ?¾‹>¡¬÷äÃ]L%z?‹W¬õaœÂÛŞS*;õFNÙ‘ÆÈ!÷ƒ?µÿ+”½2âBÑçÑÑÃEÃ©3gaòŒ¡^«>0tÌ$Ø¶ûG@¬êwD:ÕY&ŞgÂ;¸şÑÍ1çÃ•DÿïAHƒN Hö‹9÷I8ğ†xµ@Haa¿3!77×&8\Ú¸èqÍ…‘w»Ó´RÕ„<ô
~ùÍ%âO$h×N$	\€•q­•¶•¹‰*zjbß¡u½tèÿN?İäI~)ºô6¯œQwÎĞÜ»tí.#ÃfddÈŠnæÅgI.y‹)ö£Q‚nuÀ¯6zÍù|—@N¿úOä\Q¬õ³>·õ a9)#P·Ÿ|öÉ$@=ZğÄN"ÿy—;K’~ÿŠÛæc†Ån‰J \­qF¶‚n
â	·şwşxv|ÿª:×ËÀÈÇ cá«ş¢@HnG DgÔ’ãÅN*`j	^B£n‹}²“8—Ê¥/.v.ÂÜ¿´.Wë¿±ğ‘V–oR	F›ß?ô%Ø¼bVDõ~{\TŸ‘‘GïÍ>Ó60-Úˆ–Ç˜F Èx±ÍL¶…-#ÿ8*ú|VoB7§³>´j$ù·ÄÌnƒûÁöïST•r›.İ˜Éc÷Ûğš'‘&pH¶1è×pU¨úO,f\ÛŒÌıYÂú
ıŸşó?öü›~é¢˜H\uÕUE­vO¦º0Ê•+W¢ôl¥’Ì±>ù5‡[èÆ;nzD'fdàéÌDš@lÛ¹O¼0¦ÎÇ£B	QŠ:uê”±Ú=EÚ…¿U†)‘——g’Ã“?‹»V¼UÅÛ÷›ş?K0¿Š˜µÓ f<Ò£­)O¾\bµÙ÷„zafpWó¬au ¾¯¸zà
RáÏ¦'!­…1'æ~ü)thİœÍ‰Ş/<?q## RbÖ÷‘púEzª5‚Ú$İrãí©³¢"¥/÷FJ³ó~Š]·°Ìş”Ì~j§a£öCşµG»tüÃşƒG«‚ş,ÔAÜtKà\ Á¼#ÖÔ¿?7ñô¶‚Ü—¹í§’—ë˜"’Qüª«®2·ü¸r Iá&´âå[óÊdêÈ³öÌ–ºÙ½CsS¬,ãBó•n-’¿˜A èç.©h!ò‰jU.ŞƒÄ§ŠIÜœQ`Ê¬E°*‚¢GçVª~fh÷©’™¥t¢¾˜ÛÅ,âËW6$év¼;IÎÿ=a_ ¸?§VöIÁØæ¶ÃÍËFÍì`TbÕ%F²+aõº†Dú½I¿˜_ÿºÙ?ˆû³Ä’şıæÖ|³–ık®¹æòöVSü4¦¹0†vY¿{ÿác…Ù ¼ÆİZ‡úŸ¡Œ?f×ôhcÊs?«’‡ÿTQXlt¤tRØ=lÛó3¬ÿzGÄôƒÕü0‡¾°ç5{Îú2‡ÍŒÿôÚªëFrù²q­ÿPÜCê›2vUªT¹,†HÆ”ğ÷!ÅMèÛ·¯iÒÒ2@ p{cıÕ«T0¥†ÀÖ]ûˆû‚å°£¹ÒF#ø™Û‚DeÓSÈ#æòPŸlI™_‰şlí4Mî‰»vos?ş,¢zÂ²Àætäª’C„¸2XD;³DDx³<è˜’ƒ1›3ÄÕbÓËmË4âŸe. °, f>g-¤­Ô{Â	ı³¢W¯^å@³äÛé^Z„J÷¹riD‚@HœØØCVªTéV³ùaCÇ³ÍßÔ#qfP°ï8ito×Ø”§ôöûºï…¤òÄ.,$îAßÜ¥ğê‰û=,&ƒ5ôa²ãû-[$BÀŞŠS‹À(¬á‰hW"O ´–Ï½?Ö«¡íiüøÚèÛõMLÒ7.»a>g¡…l@¨­×DôÔà¯şı—/™¶â÷ë×¯İGmû\vÛ£Ş‘—_~y+³~w$ñXF÷M#ş;÷“ÏÑÉ?çÃ‘;m–/CÚ([	xnÚ xyLD‡»ïJ0íw×¯_¿¶•t.Á[t·…*ÑVtÓ¦MíeY6¥Œ5éÊèí èçV@˜ïY/…‘ÑNiÿlFá¨Ùó–j¦IŒÄÖOÆ)ÄÅté2#ã÷±{Ğú°{K€õ\[ãÈX!êk+»­°ÌE+G®˜É7òñ¹{pr.êVÁ ]§1ß¬	c^IÀå2ßÜçÔ™ ÿ\Şe,§I®q*:Ú÷ZmıPÿ!XWO™èÂ¸æšk’{÷î]‰ZJ¨Rš
^¥ÂÜa7ÈaİmAºè­·Şú€©Öıeà^÷—¤ĞhÅbµü|¿EÑ²/¨4ªS5âŠ™Z	[I5ĞÚ?ÛkÉf´$æİ´¸êíisş>Ó3²aûŞı<m6£2#N8˜3yÑµ2àş®:y06-‡>¿47™ÂW°¨u]òLTßÖ3üéX­ô™!ıh3¸<=Í—¸º¨ãáàH„…Æ"PıEIŸ=õÌßf¢cØ°awq¢•’HˆÔé)â.ŒyóæÕ¿ì²ËL+ ¥Õ°/,fßÊq^DÏâ÷›mZD>„É’ˆ‚õ`}Ÿîö=‘#MtwçûÁjŠf`Ü˜!Ä:=cıx+D¯®m<¬!ÑŸaşxíØwØ´±kĞ Á­Íš5»Ü
»O ÂİEÁÄÆY©gf–»ï¾»\¯^½^2ó×nÚÀi˜š±ıprÙ«#O 6}gDbsÑ×²lX Â–máçëaDËF¶ÉÎHŒøâãµ+¨É<øÓß€îÒ<¹ÙÆu^w*ÎÓiEƒ¬Häƒ™Ñô	£à™Á½Á‘›©IÎ%CÔ?ã‰aıºómøf·©·1şüœ¢İgÙuQnÿµƒkp¥'	ØZ!¨ÂÂˆD÷ º™eÉ’%¯)RÄ´<¢“©ğÇÀÁÌ–†¼Q½j¦ÜÊÖİ?êB¶iMwPôØ½™äÁõÕàï‹õéÀf@‘D­j7y6?›h`xûÕáğÁë£ Ü5¥ÕÍ*K%TÈÆEÍéN#†Ã%vC‹ÇIø3ÍáOî+ßÕ*—×ˆCvmhæ3—Ó¿3æôÈÎ‡u]ÌD%ëÖ­kO‰OPŠwhw;àFüZ8#âÂhÛ¶mÒÙ³gÇ]qÅwš©t­ÕsXvÙXe?5ƒ@`æEZZz…çûI9rÜ$„’ïÚÌ¼vD»;Á×Ëß§õâªš*ŞsÁ×Ñ…”#'Mıı“òÍª¹0müÓP:©„úŒılï¾mÏOæ¾7íÚİ3wîÜÆfŞƒìİHã“{™NI*I`D„bÍî+QfÏ]ÅŠó®½öÚÎfú"Âƒ¯KQüüÜ{“âç³ø"Ü¿Õ¢÷5iTïæˆ?êşƒZ ×Â2Zˆüµ¬å7uÉa§÷ÉM»fÕÊç¼B¿šm…@àÆõÔÀ°ëÓéğä£÷BÉ"’qVOÆN4©ÉOÅº›ƒI—iâĞçjPó?âá~vZ@ÿl¿gÃ„È•¿æ2Î¥‘iX†¢]ÿŒ—~DWŒŒìİñÉ§_š>f>úhÿ-[¶ô¬^½ú5lÏUå
N.§ûñeÜş\šî×lï.…»<<º9dïF¯DÂÎ™GŠrf“RÜÍ]Ş¢E‹ëRRRF8pUñâÅ«š­h$Ü.K=Ç\‚9ë/¿¸|næ—«Õ®¸­Q^ŸÅĞÍ•¤Œ”º ”/s…)é›¤‹£$‘Vä•&Ù†èŸãW,# ï9åè©Z *ãè–¾‰ÿÀÄ¼vw”B"1à>Øµf6¼4¼”»²$äå >K“Ül]psäåqºd(.óÖJóÁÓ²İÄ8ODî™ÇúÀõïÃ›/>å®.¥ê:‹“(×¿ßã%yy—‘@|§Îœ3}Ìš5kv×®]»&-\¸°«y`‚',k#	\c&<¹<
us„Ü…1şüjçÎ{íË/¿üLeE¬òbLzû=fÅ?ì?t$¦ôèZ5Ü›BÉÿ~ã·ß[N?¸‘èÛönü Ş~e4®_=fß©±@ä³Ht¹¾ÿb¬|o´mq›Xü<`Ê;‹,q%K–¼ºoß¾ƒÓÓÓ§oŞ¼¹Ëc=V.¿×îÆ(øâ	Üß3“P3mÙ%Ş|óÍÍ›7¿AÅ­%J”hœPŞjƒŒ¥±€”VØGvióê¹ãœRøqßZE Âtoî-Ë¨Pæ*Sôdê½5wşgtºŞ§…z¸˜÷yàĞ¯½&·İÛvÿ„½½µ"Atş£à)*åÈ	¨qÓu–\¤{tlIãFŞ]´–4%K#]%öÍ¬¬±öX²këvvÍÙ£ÁÕ¤w–¶Êİ¸å{hsG}Kê¿ñ­5ˆ`Ñ«÷¯ƒ%«7E±ş€dÜ;k=O×ËÖng†ô5%+Í‘hÑ¢Åc(“'O>òï¿ÿîÚ·oßÏ«V­:¹`Á‚?¹É—£J.½Æ(^Ö *—şÂA‘Ç}¿“
!ü(Å±cÇnÉÊÊºæ¿ÿş#½/¿úê«k‘oåË“’’ª«D!I%7Y}ìÑm1kŞ'zKW‰Ÿô’øjfQ7±MXûÕ‹¼7Ê§ÒÕl£ÆÊjQáV¸=“FË¦ÑÖvã¼°tÍ7ğò“XzúÕ¸ézxë¥!ğòSÀú¯¶ÃÜ…«	ñ!ë’º˜+ví¹0CGRX‹j;÷ZËÜÎµb7‹pr¿Ó­J p“Ä9‚²dõ„ÈmØ¼;zõïïpÉ²~F²Ä÷‰Ş†•ï¾f¹ûÅı%99:wîŒŞ8}ú41w=zô€İ®=€J0v]vÙe„@+V,÷ğáÃ¿¿ğÂ©”00ÒÅ‘<@äÃu×]7Åf³5‹öıîBZ:ô8’²eB±ˆ_'”…hÒ -¢æë¾ÚfyÁ€.™]ZAëÉÜ…Ÿª'ø}úçù¨Ü_Ñ¯Pw“UÀëÿ“O¿R	è–¨Ö0À÷jòŒZ‰p‹£|ùòÕø¯ˆ¦M›öä¿çÄ‰ÓT1Í—ŸçîÂ İ½‡¬ˆ¨Øg_{ş•öJ°ëLY¶ÕY$ojÓÕ |
kAHıjZ ¥¢tJ´ƒ¤âp€’§‘c'ÆD3HÖ2 )†òHMzÏ[wF¸!«ãA{hŸaymMY§NÿILÓè÷&$—»^5@õÿíØğõ.X¿y'¤ghµxÓ:+-Nw_ê½SÀíD¦‰¤HúWI÷ËÄ¢òÌc}£NÿOîMdÇ÷á“Ï¾¶¾şƒx—ÙxáıÊÔº¢¨ûËÔw>&NßvKÔï›ÿı7Y&«’I-ä<Î}K6P×saH¡(êt:£ş¸>däk°xåzmrÚlú$fÕÙä–t×†äÃ®[PÌY»Sxc îg6ª{³É/0M'%ûaÙµ¥H†ˆëâc¥…‡f<8Œ{Öã"$~Zolí-ÓwA½/™¹ğ˜:ëã¨#<Ú6¿È[/?K>İë¿ÚAbö¾³^) ™£:W´ÖÏ6}cĞ—Ã°U3Uô¯è{¨ï~ô)è×•«Å]hT¿:Ô?º7P–®ùÖ‚úÏqŒØ­Hœ|âUXùÁ$¨YµRTïçÏŸÇl
 ÅE\t#@ÉƒÄ[ b
CyE'Ñìç0zø£4 ‹>9øZõŒl}‹«ä§Y#"K jU/<\	?Q7Şïú9ƒ5PÒÒ3à“5ßÀ{‹×BêYk›Ø/¨÷úîG«IuÈhCymÔ@bÂà×ƒ¿¦Æô:…ã×ùş°zÁT¨UíÆ¸X›=eaØE‰Ê(Bl´Ô±÷cpàĞQ½û¡vÒ*6æ¶P¯eËr~z)`œœÙéYq˜@‰hÚ°`Î¼FA0İŠƒï#Ù¤OÀSç©cR!€Ïñh¯D0à³Ö}¹Ò2.r'H3‚\+xÓ=êºôúÜeĞ£KkËDõ‡Bÿ÷İÓ‚ê-KV}a®şƒ1Aè· ë¢X^IĞŞ©‹™™Ğåş'aá;ã¢Ö‘én¥¨¢™	º(Çt3‘ûTšt:Q·›¢Où{î×Úu·…Ñ+Éƒœ@E½–Hÿ„D`Ğ¶ËÑ	lÂ±YEQ„>¢šÒ†H\_	—ê"~)‡D•Ç"0 øÍÃîu³áÍCµ®¥}2õBIN‡÷®UÚB°±vï’æbeëÒÏ¿³úùÉûá—ï>"úopKeSõ0‰pïqcO SMğêòà30çÃ•ÑN øbSE(`•*ÁˆJLzû]èØkœ:ıG¾sW¬·åÜ³jitÑo‹(¬üº/·ª§Ä1«-‹ãnøjÙXõÁDèÑéN/:1§|²Õ??¦g!êu¿wã<Ëé?°u?ÿß?úC,ã±
o½0¢Ãê°kÔi~/Lš>_ëÈˆ	¢Å¡)¡ˆÊ©ĞÀI#XÇ@÷QBÙcˆ•Úu§U<”*YLì¿ÑÌ<ÍZL
Hµ=cé¹‰sàÀáßb^-hf~ëåa°ëówà¾w@	ìÁÁõ€ĞK7Ó¶Ö¤d3f 9µšz¿‡@­sºÔfè_¶Ã”w>&Y1±Ìâ@ıŞ<z´[äõŒ%‚f½£VmnßÁ=hÃæ]P¯Uo’¦5K…ÂÀ6H¿zaD°8TßA£ cï!pòÌ_”<$ĞJ \’0qô²—V}|ÿ{Cä¿6“4ğ÷PØ}ú.¬–½œHÈÓ ¢”C(ŠÛ¼5Ö­ÀšJ¤edA×ş#ã‚D¬ìÕêF6v¯#î
%Ô¥ÂÁ›ÖqÃn}§{ÿú,xÓ?~}~Òœ¸Ñ)ÚL-¢ú²G†A¾íúş¢í=tß!.stiäÂĞg§@§~Ã¬Åb!J¢’@ qxìé—¡ö]`í¦-!0„ºXB,Uó\şZ±ÇÔø*~‰*W½ı‡ÆvX3©¯WÌ„îòYWá—xÖÿŞ/® ‘Ó8Ö|×1Eò€$¢Sßa¾U×D Äá™W v³.°xÅ:µ«H’‹Äâš$à×bš )‰Ö|Ğ‚]$M<r4Ç@„ÏÇÇ·ğFs!šb…D(ÆYƒˆ†}rB"é™9ê&6BN#à\Ç&^_.ëÜœCr/©'á,*9¤0—&y¤×°vÖ¾¬ºşåõ¥»ã	H$Ôvş´¹£n˜ôš5_>º¿àøÑ}÷ }?J(®ïSÛ¿?HÆÉÄâ(5²4XûÅ7pOÏApKÓN°xùZİdÄ"ÆQl	ê %Ó$Ñ$b>b$¿—Å=ˆÚ~m0zëgá¾ˆ=x(ŒÃü¹ù¢Êx†”»7`àğª÷ÇÃ¼×GCIâŸ/,k€úæ}>`°¨~Nÿöüú¿èK$ı1Ş\îj˜ÿæ³°âİ× ÜÕ%Ã ÿP¼G²¾¿òÇöÜ›¸=Iß§Š’½kûŞğø¨ñp}»aâÔ·9qâÄ?‚@„ˆ8 iè3àØºó{0Ø~üşÇÆÂ¤iïÇåó·»«11«c³ğøèñ¤Ân,Gõ{v“ızù;¤RgÌ½[iéğâË¯ırıõ×/k×®İòh"–$Z·€Ÿ·~k–Ì†ÑÃèUôx+cë<û.¯Z¯í¯¾CŒ4”™!³„øŞ\ş­ÓU‚š+Ì‰ö'ĞÌèÌE˜H­|Z•)3?‚.÷?EªVÆĞ¬¾`Ú0ÿ­ç dYËÈÎĞ³ğdìÌËÖ„œˆ¹LŞ#_ô«°PQ¼Wºë+[®|o|XôšG·ıÈÛşUºT)xrøĞë?Ş}ıúõİ®»îº+š6¬OJ·îcøé»Õ0ê‰G b…rú@¸¸%ò]KùÇX— CoÁÛµÙCA÷¢gE¤b€Cxğå²±•$.B#£©¨æ—Wÿ¼ıûhÑu Ì^°<.ÕØ¶ÅíğÕ²iP­RYcCá60…/„Ä§z[Àwı§=	-»€ÉÓçÇ¥şßZönø€Æ¦„HÿÁ¥dpÜ„KZğº7iÒôö:0sâ³püÇ/`Â«/ÜMÄ!*ŠÊÂ¨aÁß.‡F“–€€€9HK¿cÇM‡Nı€“§ÏÆİóW,_>[ø6ôìÚÆ´{˜4}4ïü08ôküY#J•4]ÿ¢Gç»àëå3aÕ¼Iêı·êqˆÊˆBT:*µ*®½‚‹ÈÍæ$‡¶.Ö
%™ÅIZ@À3XMÔ'ÓEô~2.AaªìüáÔoÕ&ÏøÄIÄÛ&6}ü3¤’"Ys0¨O<çPÉóÑ’Gõ¾ëÿĞ±3ĞòŞA0vüÌ¸Ó?õ?mÜ“!ÒÀÊÅ“Ìµ<=Cïï¾Í`×ç3àí—‡F}ÇÎ¨&XEnïÆà©İ!©¨Í…Dh‡¦÷6Æ,:7ÂºQÇ#$.ªÜî%ª¼˜KÆÓ”™¡e×A1]Ûë&6a¤º‘=MÖ­øQ¦bH2.ëıÏ]¸êßÕ7.İ=»´­şıgº(\Ã:ü½˜%R­r9X>ç%Òæ<Vš¤Å`xæ±¾°jş¨qs%/ëËu4ö¿ğmRÇî3
„gÎöîœ:}5”—_¼bm\i®×ÿ:ÀÈa…h	Lÿh˜<}^ÜêÆÄgÃ°Îû;^®òòSÀ¦E“¡ñ­5bRï1S¡fÕÊ$_ÍDX“—}É¨©k°Q­ª¢—@õ{}õpm…­Vñá>£ı‚·,ğA^Ïö=î5ÿ\ü<ôI=û/)İ[·å}°xåú¸QïÈ!@Î­H¹e‡»;U/½ìĞç}°„şıµDtm¯"ıû±dÒB{D°_‡úûªU*N mäc1UU	ë©¿ıêpÒ‡*¤èˆ:¨@8õ‰Í½0 ¼$L@AÇŞQíÎ£œ=¸|a(|nsÑä2×¯4ÒÔYZª!ûüÔÿ‹DİÚFõ0À³pa ´BGyÆÚÃú6@áëO(ô_©~{˜4íƒ¸ĞÿÀºAÏÎw‡Lÿ¾ô"ûİSğw4¬}#,çY¨qcÅ˜×wL–eœ1iôº·˜×Ú5’v‡ÈI<°‰M„{¾»~fi`¤Úwt…g_}‹”¦e|4{inŞzãú}øŞb0Ôÿg^…ıÄ´şÇ??jU»Ìhñ}ß=ÍaÅÜ—Èa6`Õ›>~$a‡š	Ï8va„¹‚…=ØŸmx8š‰Ó*ı*ÑÒßıšÜ^;¢w‚‹İ˜WŞ c'“¶ÓüX
ø6XíÔè§æoM6}|}kk/¹2Ø¿Uì¤É-‰Ë‚B8y¤¯ÃœVÁìW@‡»›©$¿=´oÕ4æ´Ùxˆ¹Èó†lšêŠà&±ïeú_òÙ—°xõĞ´A]èõ¿öĞ«kÛØÔÿÄÑĞ¢Ë£!Ö?ÏÑ‚æ$íÅóyxóù±rÂà3Àkµ{ùÇ1qc†ÀÏûSHáöX,5Jß€™#Å^Ct pd‹­Xrà/[`ë4ó­Í ‚@ø6¢TOŒ<èóŸTÂ“<1©pr‰›'6‰,ÌÚmÓ>.ÚNºI¤gı§Ö}µƒHr¹kTÑD%íè©16Ğş®&ĞøÖZ°m×š_œéAÕ¹BûÊHÜAÆor¤ş·íÙOäÙqÓÉ½z°{Lécâöë
³ç/±şmRËê B0æ!FÈ®
Gœnf-Ätg)d¢3'?/v(+c.›ÀÌ\ä›wzîèø Ìš÷IÌ¸ÊĞ
au¤©ºF+-ê¿vónDÿ±âb9´?ÙÂR%KÀÊ¹/Ååûënp¨’W²dÉîê×r]»v½å¶Ûn»*33³XVVV±«¯¾ºXİºuË•P‘œœ\±téÒW%%%]eíèF¥N¤É3h4
ëBØr)[7Ì}„Kz õ–"d„èŞ8¯Ó2wìgFPfuí	äÍ>3L‘¾˜ßãİú©K·âØJ§B%€1’ô÷H’ìùŞ/'Zşlôs<:ú5;Éüõ<7a&‘ö­š÷Z&¢X­3>ùükÙ†dŞ…ê‹Õ'2ú?ıçy]ÿMn¯Ctã‰M8\Hªœ2ëãêŸv)¦Yˆ·^1şùgêùóçÿşí·ßReYv~ñÅÇ8«ìÛ·ïüæÍ›ÿå€tU2è5*0ã	ºÖdN{%¨ ®¡âş¹ÌY.ìUªTIzä‘GnjØ°aµÚ*.»ì²Ë­¦8<ÑÔmÙ|%…WTAØh”¾IÚêÛH» ‘½y9äY=5 [ÄŸ«SŸ¡ÄI¢HI°)A7ÚD}£5R÷á#Nı%Át¨w…§õˆøsŞP¯­6v4Òœ<#gŠêãGp®Ÿğ¸„¸Ô$EÑÍÅ
7—Xµ>íÒø\!föú¹æ¿ÇM g×¶0èÁûH9ûhæëŞÙC_gXñ§ğÍáĞë¿İ]M5GZ1ö§nË$ş#xıºÕŠDåB£úÕaù,kZ¹ıõ×ß·nİšòı÷ß§Î˜1ã%Ù¼±ÀËé“¹-28ñ'—ÏåÜä¥Ñ£GÿØ¢E‹•—_~ùø=z¼¹sçÎï³TX‰‰â$R~ùİ+Rùfü'ÿ³ç}µ›u½Ã¢åk¢Ë
¡’¦êEµş±(ÕúAıã¦=Vˆ$èĞú°ıü—GÜo©ç=şüï¿ÿşúë¯¿~Ü7ŞøAÿşı·QòØÁÕ^‰Œ„mü¸ÏñØWÄƒ"Šn¥Xºté¿ª­T©RéåË—w¬[·nc+(vàİaÖKT&š’#—š³l )ôö‰‹H0¬²ş5-#Ó”[(ÅL¨7F’MÏ&pù\ °5&Y—@¥GrùYz ÷~áéWÒMÁ¬İ2}™™İÉeüı<ØşıAbqÃrÍ½ºu€Aê;æutlÛó“ñ\N.#@
AF@„ôÁèHš¨õîv|°;qÓXø,¦%ÖƒÒ¿Â[ Ğ°îÍPã¦ë,ñŒêy=söìÙkFŒñ£úÇ\*àfuà-
ü÷xóÍg»ñ,'(Œ@ğæ‹\7B‘Í;G ˜¦‹pÄ¢4®õŒLüöÛo¹õêÕ›§>ĞñãÇ(Z´h1³­í½äÓ/Á™gøõ=¥MÒ_$ï© 2©fÀ—r·Á­EÔä„iˆu›¶¸ŒÄù2‰Ÿ—¥›
†àÇ JæS(•äº‘ÑÅW)â£¢¿w’MıÜil`Fá.Ä…ûÔ1yÚ<èyo[Ò¥×ÊY»»šè›±–Ku"ƒ¢»lQ£ÿ´Œ,ÒÊƒ_Û©kêàïƒ&êZVÿ5«Vä2W‘z$Áé]B]?ö´F|ÎO?ıt¸sçÎËNœ8ÁLC¸Ñ³ÓŞ%4¤q†X¸o
Gò¸Ÿ™@„ıØöæ›o«V­ÚÄ³gÏ1[Ñƒú÷ûGHKÏ iT¬PF(_À#¯Xušwƒ½‡ÀÖû,yÚá¥YLêİ¦ï cŸ¡Dÿk¿øÖ²÷ÙşîĞêƒ&Û¶l`úsmß¾ıÇ:uê,VÉƒ)!¶üÇàs@œ©#—c-Lrè×Lzr‘2•lz÷ßÿåª,éç={6²Ùl‰f)ûÚ«¯$NZú%ÂÆÑ\g˜Á}(0Â÷† %QY€a.ôì|WÄŸgÑÊupêŒ×"Ù‰06í’¡p±şyÄôÙ²q’»iÌ[´’‘"§<1éY
uaØ€ïó Ä›€qqs·{`$Ö…Ò¦»WH '+ãŒıdÖ"Q½¶“wƒáğ=X¤¾Ûè*À¸«Y$şüëoøòÛ4XU&ë‡ö\vÚ“GâÜ…Ñ©ÿ•k¾"®‚ŠÉåàÆJÖ*ãœ•+>ß˜şn¤¥°;·nm›ßjê3a¬aãÆ—Óıúİoqß=¯Ê?ôÏÿÒ?_¤_/Ğı:ƒş›lÎºà¾¿gÑ=íÿyàV`Jv3a89³E>“‹ô3ù
»QÜÉÎPùƒ“¿ñ{¿üòËß_|ñÅfO$4µñUŒ¾N×æ…6ÉS\¯M‡âåŞ 4MæèuÊ/Ç#şdèÂ(U²8mT“KDqëiâj„D¡p‘¯ôÆGvmE{=àF%ÛŠh‚m¬ŠkB¢èKhR¤„KKkÌtØ¾7:õN2”ö:j™¬¦:‡Yä¾kc?šÈ¯?ü|2ıc#¯~=§eˆíúÁ2úoJÖı@ôÏæÔ¿¿Éäƒ%{õêµ–;¸_âöå¿İö`¶/ÿÉí×ç¹ï¿àE.r ‹ãŒ@(<›8qâ±İ»wï5w"Õ[²ú¶»šH"Ò¾Vû™)G›3nëÌÌ¨/$œ-’}_×Ï·ª›WóıáÙ×Ş²DÖ€1£e¯tmô4ÚúÇl#8øêëU7õyÆŒ³êøñã¦g:ÊŞÖ.Úurâà®ó8óF&e,ÌZñ/dCQù÷¹ç[fæ×ªVbfäe0Á¡?Åé&´Lÿrë€ºÛ¨°ba(h&—mœù]v¶D½¥5Öa§a^æ.\Í;õ‡m»4ÿ}ÅtdKÏáĞëÃæP§EwX÷åVÓõOÜZ~ëß¸f7+”½
J%7í9~S1gÎœ_©Õ!Ê¿Ü>û7·ÿ^àöåL/î‡ÛïtsUx²ôDé8¸“Vˆ‚™P²¼æŞ@ùwÓ¦MÇSRRL‹¶©I„«HúËTVi˜g¨¯ÃañŠ^GÑÿˆÁ·°f~xfZgı<ÈFVÄ²Ë'øyêÿ@ç~#`ñÊ¦>Ş4‡­±.…^ÿéÙ¤±¦škª ş¿ÃïÅŒ3±fÍš½Ü¡ı·ß²}ö/"‹Û¯ó¸}ÜéƒxT)ÉóË–-ûÆÌ¨©[!‚aıV-c®{3~æöïSL±¶T¬P.JÆB 2sÛ¿qÇ–âf¢jÖèÖ(ZOB¯ì³1æÕ7¢àş7_oÚ]b½‡'xb¯U´&‡Pë<[á-œ™…^¾üòËÛ‡i±ÒIIÜİSRåríÅ/ÈÎ¿i'š’n#áé>ƒğƒæ{^;L ˆŞÿë`˜1ğ	Â8ó¸ (VGÄÄ”(ÏÈZëj–- ÙHV€Ì ©™µ ¿DRéÀ¡_MÚ£<½›…¼¿1¦ÿ9VšæÎ ._õïa,]Ò<÷EJJÊÏ`dIàzŒ€H¶Ïf¸Yø½9¤Œ5O.@\×ìbZ9{ö¬inŒÒ¸ñ'Ä]Ÿ2©{‰çà%¾Rÿ~„*Šbí&s ¬èÇgÎèÔ˜‰ÁDì·±O™ûoè›—lEˆÈö¢œ!&x4§›~ØUÜIX78Äú:f’)WK—Jò_ÿ¾¿‚	iì6lÀæG,í’¥iş®Ù—¼ˆûÉL«ÿûóÏ?ï7ëw×ªÚ@J¬pOÀœ FQ·¿ûö}]²*òñµªß,”Z9–Gíı'—»Ú´ßışûï·’.ÂI ÓaÁ–yÀ­øøã÷›ûè…QmşŞä&¤|,cĞäôí bÔµpiu;{èÚ¬ûj›)Ï<¨wRÀKqæ’Î(¤¾=~FEÙãÔLÁ²$­ôº&²Ö¶‚g¦õu_mü	¸tR!æ…ÂÖŸØÑÿâU,¶ö+˜‰
ú,rÀÚ¿ÿşû%0‚Y!ÇlÎÚÀ‚##r³rFM',u$‡#@TCÊÇªÍ ¦éÑÄŠ¢„hIgºT…õ&Lçlr{R†•r-£¸ùoâº_^Ö«Í¡ÕZQÖ›@ „şı§şñ·¥
}E…åìäÉ³Ü¡œU‰fî¾bdÄÒzLma˜ššzØ,şj˜˜U³ÚMyV÷Ÿƒˆéæ¦ÑÃèØ
ÄplµP¥ÄxÔÿƒ‚@øƒ#GXÎW.Gh®xrgääææ¦›5{¬XêƒV–3mÎ Ö¬V™XÜOäNõ4îÔk·CàBÿ²ç´im´%-Òzı×;Í±B4¬Ošã°Ö¼¤<­CëÈ—¸úÙ…D±HD°µ¶ÌÑ`?2m¦´ßŸò‹ëÚãµb²ú7%vÌı¸š‡ÿşû/»€½Õ”Jdrä†-¿;ãôéÓÇÌã¿¡MFóşÃæ<
«ñîkô½Qz£KÊm¬óîGŸ›ö2Íœ4’J%ä<+~%×|,„·:(±Úè,X¬ò3ÍÎó&qÅ‘ĞQé^ZIgôïm,bLÿÑ¹î›G!vïŞı'Õ¦/ù‚1E bfÅ@˜Ù}à—ßôn ‘¶H9y¬˜xA‘oø± 	Dà™ËÄ@¹¤(ÊßQ§1µâírä„)·ƒ©µªİäR–ÕèPÊû||Yö)ï|lÚPt¸ûôà}ÄòàÌËÖÄ‘M]š[ÃõÅPŒS)³.¹X^ˆõ%—û;‡´†mVBÍÓ­Y®?7ÏƒEKD›ø‹©g|Ó¿#>ôo4·ŠíC^ÈĞşıi`jŞŸyO"ã÷ßÿ9ZSâıy*HË0¯1Zïn÷p‹P˜úDHÀ'ÃI‚)M|1'<?šÜv‹A òr8WÑ²İ:½!l“1
hé$Iİì[7«CŸc_4ÑÜ8tÈØ\qèÿV‹'¡ztæê¿ËEŸ1í‚-¶#‰“îÂ›ş9wdlë?²ó¸èÂ®]».Ä£"šVë€eûó¸P‡6-À,'úug/Xjê¨-œ5Ám1ŠÒŒë×€s_†yoŒ¢İƒû¹Oèîáç„î±’`WtƒE”@œ*x{z`üè«×2›Àù­[3„{¿=‡µhÑ¢¹Ñ«ºü&}³â°É³BhâàŠJ9¼¸3üE¾n–ÄåzÏY°ş»ÜÏ¸|¶ğm¨yóš"—J^´¸3Üjï{pUÓ(µ²4ªs“J^"‚$Q½RYpædªÏEDÉËåŠk9½7œú÷4ª{3<¥ˆ=ŸÍT¿vƒ’Edpä\"âÌÍ4Dwå`Z·Ğ¢«¸º	Ø{Ñ³k›ˆŞmmã_$c>*y9ªŞïƒ=Ÿ¿O=Ú=æõß¾U“ˆßŠÁ-d&×ÂÏ’õÉ@É-^¼¸ù"¨C 6ı´”0R~ùİ´Ç5ì(U²¸aæv8ˆ —ÒNÅ@™&4H,=KI}î´ôK¤4­BIŠD‚ˆ§«jM}%î*š>œD‚ÖC0Âÿn]hê“º)LFj®ú‘8ÌQ‰Ã»¯èÄ¡Q½jêf£n09YšèÏÌz…xú½Æ<I*^”ül9ıôÀ°wã|õk(U)pd_"B~®NÎrô{ãu«Í5íY´ùâá÷FD×Šk•V*x¯¥ÔgíÑé®Èo^îıP8>ª4®WİĞÿ Mÿo¿òDLêå™ÇúDÜúpáBºËš/ñ×Ñ‘ˆ·"JÜ®}ÿ·L$4şùá>oğz›ûá
Ó
K$"	>_4=ĞÍ1ULšc¾ßC-`å{ã`Õ ñmµ<~æÂ	üYjU«œÚ~Ø¼fLMn¯±çŸ5è×J«u$±uç÷Şg©R%òé›Ç¡ş?œùj€'v‹ê¿ogH.w­9Ö¿×O×‚A0ØÍÜ¥eY6q$
ª¿!ù0Iİô¥Ğ²}ïSÛ]#Ó2ãCpbÑ'w–(Û4!÷+qÅt$Ïv<ÅĞ‰¸E®ó4S$Óƒú³Ò.^‚ÉÓçÃ+£k¿J–Áf³™¢‡qc‡B“uàñÑ“ ınå"×YIáz‚Ÿæ¼™{‚Bõoá®i\`{tºîëØ\½.¼û¢«FÖÇËÎ¹jœ^æ³áÎ)U@‹b4÷£œ:sæ.\k¿Ø§şøKJvªO­#ıƒdK£Äëåş×—Fï5+s®]çKÍÓƒ{G|Nî?ø‹öÌ4øÚĞ‡vŸ5«z(Dò€‚úÇâm³ç-ZıW¿±"<aë#p—=ÇôàZÂÛúoJ&A 
™iŠ: Q<’Û„S	Ä÷)¦ßÕè'…ë’+ÀØqÓóeGºôŠ]ßD¹€Ï‡K{p§¾ ë;¡ÿ`mÁš»`9ü¯CK¨¡.†v»íÇGŞËØ¾U3øáëº*©™³ç/sy_ô ùD"šäJÁ:Å%ÉŠÛ¶¸Ú¶¼ÚİÙÈ?Tù2PªDQ=H¶s±Dé÷Ô¸éúB’šWG$²m×¤£åº¯¶Bºú;±°Ó§â4Æ]q™#§s9Ì:wR"å 7¯Ó_2å½\ûÅ·:Y5«¬?mrùk|Ò?ŞQ°t>6¤ZÿåVH=ûoÔèõ¼É·şxÓ¿ÄéÄœÂVÑáÂ1Ì¶B ĞôùÍg¯‘ÆgXf,ĞŒÖˆ¾Yñ 9_>ïû:¶„·_{ÖÍ…·_}ÂoòÀP«FàEÅ|±rğ@Ïô‰£áØ5°jÁSÌÒş ]Ë†°zş”ˆg^h›×7…@?u‡.«qÏ>û¾^_¯œEô_³j%Ëê¿ñ­µLÓÿşƒG|ÈÀˆ„ ğ–ewş¬1èÂ©—Më7ïT_–š¦?!HgL£xæ,\[wî#AÌÔINá¼ÙÓÃó*.'	­Ï;Icí\Ğô½hÅıûwìùY=ñ/%x†d"ÃG]Lÿ4Œ|¼ÑÅâU!ıbfÁz¤àŒ¹ŠâU‡¸øcLA»–B:W°GÈ¶İ?ê¿—³:Õ;’İ¬elÆ+2q[m"¯@2‘ÖoŞEîcİ¦ï¸_ÇüÂ®sÃú’T<^õXÄƒ&óŸ~é»@ËÀ³kf	H.8ùªYµ2¯l–¦Ç%™§ÿ}ÿÏ˜à6bX´|§»Gı+Ş\îA ¼N®‹ÂM|¡|É$ğğo×mÚ¯>óˆeO…¯H®Ñ¥qàğ¯ÄüŒ/Ï½)Æóº5Â%¹ÜÕä¹pqK.{5yPl¥Íû	|¼t5§	Şœõ‘ú}u¡~¦“Oº@Y÷åV"ÛU¤ı‡®¥6P$æß€¦—ö¯“Ë^EÜx:D²€}¸NaHL¸°k‰¿v_õÕÏ1ı5t:¾ôéH„ÍÜÈpCÛ¶ûgºn'¸šÜC¬sÜ¼*¨zïÙ¹•)“<0}síÆoôÍ[–ŒÍ›7¡‡ÊzãMÿä½Wõk@$ôî4Ô½Ùú'×?­¬=¯sgH^Hƒçu^ Ş	D˜p2õ,ésé")¾ 7.$ î$ ÔH¿˜O=?¾ù|eÇ©}«¦D´SÛ9uıdÑ¤ür.¤g@Ê‘ãêé-Ã§ŸÅ¬é2¤†º1GrñtÎ•
ã=6iP—úîQÏD×¨sÔ3µM T}ãX ´»³¡%æÙÇË>#$B?ñ{´ TŠ¸şÑR±}Ïşêç<Ñ}Ë–Ñÿš›‰û¢ ıa>ô $æÌ_NÜqaÈáºúì,pİ%cÇMƒqc‡‘“‰dá %<ı¡{``*/Vø#]932fvH,áIÊg‡©Â+‰{	cBØÔùÂ¾jDüÛ=#FÂ„‰>C)“OºğÎ{»fúÈ²K!pŒğ¤‹İb_}Õ?#ĞVÕÿ¬÷İô/qú—ù,D)„iä‹dæúC˜0d…`•‰yĞf×u2÷Ã•$½°÷ÿÚ‹91+Dï\Æ‡$óÍ—ò§ìš½ğ#	`V<½Æ
Ğú€§_Ù–¨oTd#“m.ïO/µ="	¦+Äo…
[wì…ïTqÑ?—Ê.ñiœ‚?‘…¦şè_:T`Ø˜‰Äÿ*4mXÏïùK›†•0áÙ>®1aÑÿ›¾ê_”¡Âßı ¸Bm¬zÙ¥µ72^3Û\Göô˜dèA²,'h¢êÀf/J¤K¿á$.D ü@‹Z„H¾4ß¡•/7L- ¡Ş¼æÀ©Óg1¬x×CF¢ÿ	z,Zö9±Ä¤ĞG@²F¡ZA ¢”Dx"˜~P‰+P"Ñ4!Œì_òé—1¯ÆZÕoäô ëUñ@Èö"DÒ3r ßàgMmû/Àñ`mİ]Û@»6Vã#ËkD0"€n‹‰Äú`k&ZJÉHÜŠ@è€àÑ/Mñ¢Yÿ\'ì0èë^  D$:Ê<ûêÛZ@›Ğ+	ÊêÔg¨ avfÅ ¾Îõ`ê?xF¯‡‡ûµNZñ¼ºÎ¤…qm"¤\Ú[³SxzF&Lš6/Ô@êğK4ÒóÍ‰ØÁ–Pşz
:÷.HD$¬B\ër½‰[§T¼"µ>B†Ñ/OP+\‚Ë;€¢q¢ı*$É§Ö¾ã÷?&•?½êŸ¬Í†;hA LÜ8“¤¡ÅCÌùpÉ½5HúIJZ°†¹2P°¾BİDLDÑ´á­zßÍmáäÒ:ı?¼® ,!úİg½¿XO4æ¢æÒCÁL?lHªş¯Š°aÖ˜—_/Xÿø§A F8Š”zú™CFOˆ‹S·â£NPèÎØºkŸxÃağ±'±@”XH6¯{ağ“ÏûµÎh AàBl×İ›¸üÓ(Ö7A â–:(¡ûcp$j@ó$š)ñ®²ß”£'aì„wâF³º§é? $ôÌ\èÔ÷	ÒšX ´¸…Å³—¸0œÀZy×ô¡§@!›×Auózd„‹Ûß{œçDl‰úüÇ÷­
8…)Dúïpß#vñR¡úg®#MüÛ€û*÷Eo…¡°”6€„ÄöÒhk4WÊr"‘%«¾ M¦bòÄË21Üô »uPrÙV„“DxvÜ42j¼ˆ‹!H¥â%ªã œLœ–¬MX»q³ºy=
Ò/êXQNt™çlş“,6NìCRI(1hòàşí`dÀH"†RˆèÁ³¯MƒÅ+×Çæ†¯Xwtè[wî“$H`õÃš}oã]UÔõÒO‰å!˜L+AàÇš_C‡îÄa¦›u—¥¬Yÿ¾í,0Ó®¥ÀK›’–¸¬î½«Z«Ñ×¡ÏN%¦Î]ZÇ¦2±zÀ’¢êù‘ 8uöèØk~¸ŒöHœ”Ğ?úå×aÿ¡#tê%èeÅIÔ¿§nƒêW<¹‰:şcğ“/Â¢eŸêÁÒDÏ4XèŸ»Ö¾G¢*W8ªÖFZ±,Ô5ñYÔm”èƒşenMÁ“Âƒ él\¤ºV¥¥¹i§b™î¾š‰ğøèI0iÚ±FÉ
Õ‡–as53²ê§œ=9±F iXÀ7â€ş_4ã8tTO!æÓÕ4¿/[7}ãœ¯wW˜<óC¡HÁzMÛö€EË?§Ñşöç³&6—tAOúG"'P8°HÎ÷‰*HÿR0k›ğ_®ÿÊOúê +ìZQ	ÄûĞwğ˜òıûªO(ô{p‘èıè“Ğ¡Ç£dƒğBº?¬.¦S2?5Ää NËî0ëƒÅÂ\Ğ©W=ñ6iÓõìí{tı·èßš+ô_ Şyï#hÒº»óüZsüû9qn v¼öv’ğu!øÂJ4Ù®1å›w‘…{İ¦-1 TÉMüÕ	Š‘Èu"lßó3ÜÓk0<öôË°ÿàñ¶ÖøL=÷„=ÀÖİ?¸ÖÙH(
¶„bDğZ×§œÈY%dC$›şù©3‘€ÖÚÍÿ“Ş~ŸT0t^«q˜øö»z}½07oÙÉWÚ³£ø÷Â¥ì½Qt.íbLš>èÈÈ×„şİÈ2Îù1¯¾i™Áé_ ¤ˆÓvŞŠÑ/ /WÛŞÔ—X‘YûcÉàV9ñ¸6²ôgÊHPlÚçé³¡ï 1Ğ´A]9ì!ÚM1ÉƒA/ĞäA'n?Ç©ÿÛ<X´|-ÔÑèáBÓF·ÆÕl=yê©°‡PÉâ(Ùu2¼ÌRñs›İğÍ=Ûò‚ÄÿiûÙÄiïs‡ÖÍU¹zwë—«ºÑPï¸y×¹F~uıË	ÜÂ¿tÎ«_Æêõ¿hÅ:øxégd-èİ­ƒ:-‚TVâ€5C£ÿÀ÷
>fEdbQğdÉ·ûIAÎ˜ÂÊ˜h¿‹*}×s74¾½6Œ10ª6IÜØ±
œw³Ÿä³
Ò!fit¸oé÷0øá>pO›–P1¹\Ì’†5¿&‘şh2—ò•Ü-L‡ŠºU
ü9Xx­z£_œT]£¾ñk,	F÷Oxã8•z¶ û³nH>Îy·5A}§¶îØC:¼şcLàœ_¤
YSÂ¢ÿ`Öp¸'¬îº+$š…¡ed„c¢/€	ì’‰ úKâ”rˆÙ¾cï!\¾Œzú¸‡HÅ
e-¼à^„“§Ï¹Ö–çÉg€ó§I´k!h®%UŒkétúì«oÁ³¯¼ÚŞINhxRö…‰nÚk6~ûÖ1OV Éº®\"ÿùk«ƒ¬ëôöÅn‹¡lsña²ï!®=ÙĞyú¥X²j#,^±¸şPçMÖ'
+ÏM­kTÁ¯, Q/< »ò]Û°ç?…DûK¬FŠïúÇ9¿ş«í°îË­ O¿¬’Uÿê«Ä½Ôª~SLèç>¦ +[8õ/¦İ-2Áˆ»(½nİºÖíÚµ[é‡Æ`¨	¯ÏÙn˜|m‰ÅÁ–PÜ0…ÑÏCÛhÅHŸ#È¡µ\&Â‘Î¼í{œZ†¢b…2Ğşî;È¢fM37J4'ş¬¾ì“€×©gÿ&éSD‡Ô÷NtÈ½äëÓ	#sÜ³»uaeºb4ìgà¿ÅÅ´ÓSXppÑüN=a¢ñ´ÅÜ@7£õ0¸|îš¢iw#ùÿm~ı‡NçH jU»‘ÌËZÕoË³4 î]H¯šÉâ¾&¨s]×ašóŠÃå$„kA“uÉÜÇ1À¹-úÿnû¢{´,²˜Èè?'X9‹¯–M3%ıV’¤ñê—¨C¥*'˜J©İƒŠ áÀwê¢Ñ¾ÛC–#
G ø…-ÖlI.w-)WŒ6.¥K—"±ø9å0yÁqƒc/ú‰Ô3Ä¬îş¢²`&w!…‰@(LWŠwı°Ïq1m¦nh¨§ŠÉåi‰gs€Dõ‡&¨Ïï¸ìŞ=Q`'T)ÂÂãÏÄ9Y«FU¸.¹Õ}9U÷UMİ°Pÿ8Ÿqnkcñ‡WıK60ÉDá¢7aŒ…¢EÍjUàº
å\Ö‡f&;6ÿQÿìbşƒ#î_cÎiß‚"nƒ(õ:ÖÜËìÑ—¦„‡fé…}ÔÉ/ÓaPx3¦Ói,.\Á+\XğÔ²vÓwF!,
\¬+V(¯ÿqÜ<=áä©Óp‚’Íº°§`öG7-Òß‚†íZ÷—ß7ß¥w°­¨Ÿ)t _é‚Â2f<é‡-ÄÛvÿÛvıàò;pcC¢Õ¬ñmÉh ­báª@ÍÁhaé¸äZ=Í2İL=­/ºÔçÑ=Á»$ŞaãÜ§sÙ[‡A%b:Çy{àğ1"î@½×¢D‚éŸ}ŒªßèŞºsŸëX¥»g÷©é¥¶/(Æïàİ¯8)¿üNÄÓúĞ´‘¦wràP‰E¨õ–„“§ÿ€ÒI°ºş}%ùöø%×ql¡±MR8æŒÄi´kM§è‹¡8íùO'ŠÛé„HdşD¨ÓñP¶íşÑ÷»bV—Â¾#
ZÁ–Dıå×OÏ~G@>K²0Óõås™2ê‡mlşè%èÑ.D¯ù¬ü¢)å?]y³Rxµô(æêœ!-#K×»µõÏg²Ø<…7+~®şèŸ·4ğ'c?ÆBè?•Co¾A°ÆãCÇjä¾€€€€@ø Ê¾ú5^ˆ#ìôÜ8­+ ƒ,¯şIR¨O~ÌŒét7)G²B;-IÜ‰ÁÍä(IÜ·*Áş*­³§-ú	^ŸÀ›m%Î<+qQå’›ÙV
Ññ+.t^˜ş=ŸzÃ¦s¿ô¯Y'Œ_«Äàü7Qÿ^­†Õ­ñ­5kBó…á2ÿ¼)¼/‘Ä™19ßıH.ARv·@6%ÿí‡ï]×_xOÙa	b’ÜÌ¼VÕOXôÉ§¢In:	ç½Å¨Î™Ï EFç>ëâhş›¤7+œ«¨†h~æ‚¸í…Ñ¬Ñmbô|F“ÛoJ€{ÚŞ	¥’’ ıb¦Î.õÔJÉ©’`%r'>—gÇäNŸ’DY0é%!éßÂ>øñA¿5Ş´æâ-Q£ŸPêÓÃ±MÈ%`Ç¬ÎıœÏ‘Ô¹Wı»ÿE<Ì³æ<Ëj1RgßZKÄ@Á‘ˆ6-aÑršÓKzcĞÜkYÖÍ€Fe3 s+›şB.…Ãï¾{´"ôJ}æ_Ùò]Š9NıG;&¦ç¿úwu[(m/èÙ¥•`n0Õ…1oŞ¼Cfşş1O3@@@@@ @$—¿zvÂRˆeË–¥™ùûµ¦L½`Ö{»æOc!ÉèÑ`DA»742‰âK¢Æ»ĞĞ¹€‹`-®—œÕ«>‰{Ãk#5õN=zŒè~Ë¤Ö˜Dét:M%_|jV¯¢ŞG)#M„–,%B\Nê£Õ+õ¶®J~°Wğ°Vsk8Vød•VÉZOJˆk%Å{tºÚİÕÈ
Oát#î„"şDffæ!³ïaİ² Cë–^FEñx­¸\ƒŸ"DˆÈKák5xù|Àı÷ÂŒ‰£LgçÎûÏŠ¼Ìô Ê¬¬¬Ô%J40ó°îû¢w§Â¢åkaÂ›³!õ¿ÒY…M\h¾5_ğ„æ£…ùï‘ DKYˆ›¸N—Æcà­—ŞÛÅMn»F>ş€úµ–%æìÙ³ÿª_ĞÇMèŸœu"şDFFÆé+¯¼ÒƒÔ»["k¿øÖnÚ¢~İéÙ Ñ¡‘¸&R¼ŸÑ½k¢"qŸş    yşà©[,ßEVc:ÉH.w4¹½6¼ÿ^¨U­Š¥gÿşı©ê—*<ÈãDÄ]¦ˆ”””+Vf¥ÁêĞº˜¢Ü¡_I¦S§ÏÁ¶İ?“ë‡~ƒ3\g«K®¼§Ï"Æ ¼\cFEÅr×B©¤P«je¨Yµ’*•ÉçVÅÁƒÏ[ñ¾"½»É`Ä]”¦‚æ£cÑ<U±mtçûŸÔj3Ú[kmjmâ]ˆ$}@‹í]±êƒ	Qı,ÙÙÙ™E‹CÿxŠûu–*™cŠˆ5Â¥¬³²²Eùlg^6-íÇA'°ÈÎˆÜZl¬¹úåøı÷ßP‚€‚¦ïTğšÅDä	– ÇûTÌ|WüğÃG­zo– +W®ŒjIû¡V-@Çôô\8Ÿİ˜3gÎAĞ,(,ˆ…ea 8İ>"°[`”á…^81xğà“W]uUÅèœ«Š^Ål	zS.ÒÈF¸/"¶ëk2®ÃŠ3ªçÌ™3g¿ıöÛ(Y J ²¸kS³0,ÓÎ{Íš5ÅìĞ°xñâV¾?3	2&f~É:uêöÜÜÜŒ À^®"¿G'²²²2§OŸ~ «
˜Ì£{§©şr»‰#ëÃü’“’’òï®]»>oÚ´iÏh®Ìó&èƒ€€€€yëq´G@lØ°aë‰'Ò!¿Û"—ÛCM}D»•6dÈÏ¶oß~g‰%®‰v
‘ÿZ@@@@ ²ëpt®¿h}1bÄV«ß§lÂè2áëz#Ëú÷çŸ>µbÅŠ™11ºÿÚ¥ëîäÉ“—?~ü<µ<\T%Š·ÚqçÂÈÃ,ƒ
"%xàïš6mº·R¥J·Æq‰0e"üôÓO‡_|ñÅÜşÈŠG!.Ñ#„#?:vì8kË–-/\yå•×EçÌ…èŸÅQÍ ¢çÏŸÿ¯S§N«£å~eG—QæQVÅL4ÿ<xğÔë¯¿>Îáp¤‹B@@@@ Ö=/ğáÉ“'qÄ¾œ\¢’®Y¦2'3Ò8™¿†¤oRÉä	„*ÿN˜0aßh¨T1µb™™™Y}úôyùòå'ÁÈº¸H…'|'_ö8.,~aêÔ©§}ôÑ7şüóÏT1Åb‘<ôìÙóã+Vœ‹¶{7›@x³F0æ•¶páÂ-[¶|áÄ‰»¢C¥"C@@@Àk¯µ×İcÇı^­Zµ7>ûì³ÔÂÀ,ñ˜ñ/•t0
Iå‚…rTím÷gT’^£âŠ<xğ¿ë¯¿ş­	&41bÄEŠ)f¹yë’~¬ä¿ia^‹İÖ^‹.¹™™™Ù~øáÖAƒm¡‡f ×l‹ÿ(y`û û$–iğ!GÓÜ3fÌ5kÖ«²µY*ÄÛ"    MøöÛoSn¾ùæY*yØíÏb•4NşŸÃ›ÿxÒ†í×_…Î;ÿ]¹rå¯fÍšÕ¸yóæ­‹[ÉÁ_Kâ}0m¶ğÀ»eË–^xá…víÚõ¸Öx`= ÎSj}H£×˜}Áwİ´ÌcZ©SL®›b²9E_dŸ;v,¯uëÖKÕë/Şxã;[µjU½V­ZÕÍš®kGñŸ:!   ©ã›‚RSSÿüè£öª‡İ'OLçÁ%z{Z:Gş¡×H.p{b®‡Ã¶°@„O>ùä>õË¾äääËtK›6m*×¯_¿Š9“WQŠR@@@À|aÆš»wïŞc»ví:½`Á‚_öìÙÃârbQÛVraHœ%‚™k²8Ë„ƒ³F°l ì˜zN:õïØ±cÿTåKõ‰ƒ¾¡}ûöåkÔ¨qSÙ²eËU®$a]ˆ'`0äéÓ§ÿ8pàÀÑõë×Ÿ™;wî	ÎZÇíeÙÜş•†5Õy`VŞJÁÿK>­dàÛ|;¹ën ˜¢Yá)šyJÑëÒTÅfıŸ½séiˆ¢ğxlçA4ĞTj„Xu[Ö¬ÿñ_+º‰T¥]TtÑ©B%JTò°q\;±“c3ShÓ œOi4?p†¹gî½cİ†åSX…½¿¿_ÅDåààà]µZ]¯T*ÛÛÛoŠÅb~Zñ`Y£´Ó²„´GUšfX,ìÈÿ8B™‰™ØØˆÂyÙü/§ît:îÅÅÅõÕÕÕm£ÑpNOO¿ŸŸÿ¬Õj¿D:$áŠô·*p1Ü¡„'0ûÜ‹9[Ì«€˜9ggg­°Ü›òq{{{åİİİ¨~xxXMÙÚÚZ[/o¾íõ½’î¼Ÿ¿|{ i)Gu)å¸Nñ@!³Ä€mœá‚.0„Óîˆ÷µºüÑ[Ÿ_—Kß÷¨Šf³Ù¾¼¼L¼ÁÉÉI3ª„"Á©×ë,h}
.ŸøüßWR~ôdwF..COC\"VÃR‚>‰gÁKJ4dúGmIˆCÂµ¢ëf¾´i¯”wÌÜêašëQóøÆìœ°r¹¸^–á¦
‹‚BÑ1Ü‡¢a´øïwœ›n«ù¡ûã£ïŞy`/‘«Ù°õ(ôÀ£ˆŒ>´ûÁ^ìÉ’(VÄ¼z ^’UÃ{Eoƒ'¥–¢^¡ğJLB«qIÄŠ	×R‰˜ñj×V¬Bi8(¥™kK;×y ¬¾4mwÜ×0˜EI!³cA0ğ½\("†¶Àm·Ü¾sí((l
ì@¤Ãè¸C0™Ï1l½n Â¢«8V—íxİ¹ˆÅQ7=^×¹	Kï‘ÁnÃ „Y.2ÅB±/ÉÜ©dT¡*é2ëEHêÚpÀØc(${¬„çe+«+&®'ÌªE·Å!„Ì^D$¶ ÃÉŠß“ğ7.ê<‘~YîşC/‚^„ÌùmÅœa7Ïÿâ>d,Ğ€Éu]İéG¢Ró0°P@˜ñ}$Œuõí„ò<¶ çmİÜ®KŠÄyûø`ø=˜@q X/-J9B!„,£Bå…øS=›€iƒ2µ}tı±]U¨@³™½„Bfo‘=[Šöl‚¤§h×…!ĞK¡èæü…ğ>,’€ø×¿Y
}ÈCÕÇêÜ!Ğ=E!²¨TÍíYAğ”İmõ\ª9Ÿ!B!„L¥Ò–Yª…Ê3ñàSÅI¯!„Ì§Ãy[ÈzTO¨S@mN!„Å¡ç¿„!B!„Lµº&|N„²ìĞû@!„B!„27ü` Ücº~×Ù6l    IEND®B`‚
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: image/png
Content-Transfer-Encoding: binary
Content-Location: https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png

‰PNG

   IHDR     È   9‹oC  vPLTE   	!	'# 
#!)&"!QI@/+&60*H<2YPF960@;4XK@E@9ÙÄ­ OC8IE>"&@4+¡ı’yf.20;?>k\P©v*,tcV²–|bRC~gY`UJ°şù÷÷ñññ9:İİİw¾’é™ò ,+_'Ht‡Ù„m]­­­éééXRURí@{ÇÇÇ6d¡ÜÊ·O‚âââ‘İl°»»º‹$?€ÌÑÑÑ@ıØØyHKÙÙÙp/:Î=lè;vÿI´0ZûD§[[; +Ö7lä>u\``eDPll}}	&4zwIP„‚>K
:Bfk.:,:0@PZ5@WZJUPT‰}z)65E9GDK
,7tvoq$‰„fhV`%2'5)70<?GT–Œ#–‘)3	3<6}6A1YW$qo$2•’5¤:’‹	%0ÿ  kª &2"0¢¡úPª¢ÙÁ¨É­’kmjúÿÿÀ£ˆ'@şÕºŸ…pÚ¾¡Â§Ñ·œ¦”€Ï²–ÿÿÿ+CA^`]üüûş¶¶vvuı›‹wşèè ,ı¥¥çÈªÓ	¹ƒıÇÆ#0Õ
ILIİÇ°üzz".ıJIÊ³›¯Šş‘‘ş%#””“*	6X¢…oı99?f (Šsb†††Õ¾¥	/M,™€kıba»ëñ  OÔIDATx^¤Xåv#M²¼ïZUÍÌÌ F³‡>fZ‚Ëot£Úš9{v¿s¼©ê–-Ù­Î¨ŒÈHıÃÿœIí®İu??»yö1q~sóì&ç‡Û#‰Âğ ¯W·ÛBœ_b¸/šRUÚˆªá4u]SJ§Ñ´LcLK“u²6‡Xê;[Ëì$Lkº³|X»]·ÖwV×õ}ŸçŞÁ²—iZÓ4Å^,p=/pH½ß—´”Õ=BŒ
QUEênßõ©¢÷¦«º>.wÑ¶}ß­õŒn·‚A”WÌûöì¬m;©ë$‰Ÿvxºü÷mÿıù³áÙÍù31T+  p
 PÉb8We5,ZˆEcPê5ñœº&TÑ”,Up¬“ÄÆmô–d&™m-mË¶W²ôq´âîwıs:GoYy<ƒ¹L5æq_Z¨™1§kf »÷óCU‰†£%–¯³@·İsÇe>XmoZŞQµ(5¼Ì].ûî H½tBÇ_€°“¾ç[üqÎYT‰êáp”«p~Ø*ÆñXá¶¨ §(Ú8	%pğ5-Iµ4MìÄ¶ã®íãØµídˆûŞÖmÍj&iw‹³Ø²=4¡óZH3ß)ÔÚÊ&eÊ˜Ú4Q‚º,ö×‡UT–Ô×{”kšµ9c6f™k¤œ¥lx%ÓT–…K·íÙ—ÛÀ_pù3*ácA¸IüRA‰yuDE¨ƒ-1šZEÙœBğšÆa,Õ|–±é'X‰p-©ËcË6ûÁÄXk•ô)K“ÔŠyæXyãûÃ`¦ÃwÊ’0†T2œu- u¹„ˆªÜhSŸ’ÔÊ”,°rk±p—}J„š0ÍQRk·ÙÚ „¶ë8»İ_ƒĞş|şq(œcİA&Tàã|>?·!aÅ|nd ¸YZ;mØìkLãé')¸`#Ö.@ÀfÛö`[=¶^kTìIÌ(ˆÑµ¸K^–9$©ï°F4$8*
S?sZ–,ö×û2ßq°œ”Mx™—‹AYš8é
.|Õ%©9 }/<vwç	„]{¹Û}4`Í¹V7^Î##ÂÃíœ¤Ô¤\ß!PCßg€‹WÒLÛM†]$;Fu&åõµz½§¢h/¬>ï»aÈy­òÕ[CnÙØ§$§(‡mÆ}‚HFñúz_"ÏñHã¬-[<Z±Î§74@øşp[3¥>æ×åLØIÈ	‡¿ áû®HG
°‡ópkÕa~q±'#sä:[û‚à(nñü5@ÀyÀ36'B˜àÃ`›v7˜(ı´@*ê­å¿¯,³‹‡ ´‹Eß!P.¿DC©ø
jÅÕøè8^¸ß‡†SÊ¥Ñ4~–v®Ç”² l¸—™2xu@ JÊ¸^ëL³ÖN İoß^µ Ş‰÷am¿t4GÏ£²^Í€Â¼€Íl_ Šâ ¸jÈÚDQOg+†4Ùc
ùk-= /º>ö³øçkG3má¢ÏMK’“8‚/îÚN`¯!n
 ğ \3T£ùõÜğ='qÇaøkRÉTi5vF=òÒIG®JŒšÎUˆëNÛr9ø Œí=*—B–%ìi¾!‡óÊØ·sÑÓ5prlj_s´”q¸Ä\,Ë¹êÅæZKŸv}b÷&Ü‚½fâuh$W¹İ4A–¤}¿„ô‹ü„Î².mf¦¡>ÄÀGVxQ‡ˆ¡ˆšG£ÌÎ²Ávš§Êj%ªè†DØú^¶NyÇôH¶–®$t….ÎsPâ2/{Î†û€€&¤Ÿ–2¥©U%GS(ƒÑÕ¡ÔÄÑ8#p“` µ 1@;¬.áï@Ôø	«ÃÚOÏşÉáyĞğÓïõ0.8÷cSÖ”’ÀñBÓ4…ªŠbR8Ì©}ËUÖkX¶ºXmÅy dZËÖÂ ”n£hKYjö-ÇÒ0Ä±¹4ci‡¸/€ÁóJÁ¨ªÕñ­ª0”Wsu~ˆütÔ]-S¸¤ö:Ma¸K3¹GŠk¡íp…·>loÃ<C,ØÓ¾¥hû"ü…`Ü¾?ÀC¯å¨D6ÓP9%<Bm¨×ªNìi;]1Ñj6[m«yEêZ®IT”ªª²,GÜµRO]““ Ò+I2 é¿KnĞ‚±‚Y‰"UUk¡
r65]á $Ü‚åÖIĞ{<l«RŸå¸$ú¬„ÇR+^&šz-â·¢ğí¡‡›îÎNÒhÈÀØXê4F?¢Ÿé+~6º+3Dõxä ¬³£Pœ²Ê›¸(À*¦®ÃO:
±í—fBÚ¿  dJ@Œ-¶ÛH£(¬¹@Ìvİa™ò¢EÉ›“ß9E'¦i÷‰¶î-¿ÑàiA-zƒU²õ YÍ¾6
øcH¤ëæ]·Z\ËÔağÇ”ûqÃ JBIKµdŸ%	ó‚@„2E´º˜}1C¬J ‰H$KSÓÖôµ›CÎÇ\ø§ŸøÜğ7>ácg‡®:Ü©âQ£É6ÚÊÇÒ7j¸úÔDŞfªá‘$æÉøaY(nn‚msôájà¥Àa%sÌ-Áõå¢QYC•Òškƒ=tíçƒåò@
¿U ­,ˆO “~Ê¯¡U¥Šef\\ TƒŠä}¯ŞV÷ğXfß¯uËZš
ÉÆe/ıtv`ÒÆ{€0õ€r»]!¶r‰İÄNP¯ÉºÃ,&ŸŒêû BŸK–Ë_ô©3éÁÍ²¥Óx0WŠ²&t1Ø QÄài·<Î]·„;(!¤¡àº‚‹„yÀWX@¨·=†Eí¥Á„ V¤N’U`C¸Ö®ë¯ºî'	í×jHº6ûøÔ'îo‘ç™ÂëÀ˜P¸"q—u“‚Ïù€tÓ|8É¯œ ‡>ÓšRğàş¸pë,Óñ3ºß'˜×YãÙW6QtDN_Ä%&ßŞfÍ¤ôµQS5ñ@†& ÄJ¹ Úh@f(†U) €h>?VBI–?áßó'é¬–Køæ¶³r{;9Æû0ÍÒëŞÍ!†g+cUÇPuhIjÂŒÅ}>$Jˆ81~J˜ãpô6[êl¶/6™²Á¸¹Ùl=ËÒåR¹ i|·Y “F¯.…²ƒ['¸ XÈÀ'´¬YÍò
ep<A±ó¹(“å8šÃÀ?9^HHş›oÚ6Î“_üìlÂàt Üûb^ngG|5Ÿ7À v˜¢Áæ ?T¾Ç'÷SX6âi¢PlèÖ H<
›_6S|¢àøä“QÏu]ÏR›ÙW»¸çäE1Ä‹¶·4pmh¯ª(ö9<* JJÔÃ±ªàÃQÅoµ(ÔjX‰‘d£>.Ñ¸[0Å_-–ÃÒuB×á©?ÜLPĞ#xZ-×ÛÙ¬Š"(xAã¦eé`u1÷IÓ×#S£Ã3œ/T[ºİ~º¡›Í£/¾úê«7|óæß|õâÖ§¿|¢#k@ÿš¢Çœ8ğÿynºŒ…àÀÉ‡ˆ"Ğè0[E²ÈAËZ¨å·‡¢Ïœq	‡bæh2.nf7d™¥ë‰Ç=
awoÎ9
~¦ÔEc®Ş€ ¨Å
q8~“20%Å˜<¸¼=\èğÔÖœZä"²}ôÅ‹7|÷à%ïpLñúá_<Úl¸Ã+Dµ 6³[ `$Ø]£G½¨k¡E<Ğ%ğ{5›EE%ÊÇÙm%CKø£}Xe¢Ğ0²ß}[©R\3Ğu–Ä½´kï‚û	%ñeÁWĞcÛ)…-,Êííñ0¡òî¸Cßå(„øÎûNš`ó-nPşóÍÛï~ó›¼|ğòùëç/ŸOkÂãí/>ÅQP2×´îP€¯9ƒœ%c¦x‚¨ŠSò¨
1	`Z·«H ³c$«à„as4ËMõ4Eÿ]b@‡ÉÊ¼,Ñ\\yw	 îMàU%‰Ë|–ê­]åñ8»8¬Õî›x gÒÀ[bÂ ÄĞ»ùôÅ“—/ü×Ë)NOÏĞxş?†¤Ók³×}	B´St@Ack„¾Y.k"Zqo$(ÕÅí1ÂHE²,ª`ñÑb4Íµ‡µ®»®¬KÌlÔ4“+#0øu&ÆOë½/Â1-_âyjçFUÒµ• ÂÙL,6âŒˆ’T·vw:­Ä5QêîzcâSC¶/¼ş/RçÁë`:ãõÏ_¿}ø/›¦ ^¾=R{ŠNÂ\=˜¤‰É%ƒ¶Qˆ&ö`˜_q¦P¸¬€4”ÀJà‘LJï…†¡‡%}|²ğ7 Ü ¿›?}}ŠÏÏ§æ›ıüÃpe}ÉJÇLsš$Yv^Îfó}¨î‹dLz• á¹ûƒ?™vÂêàÅÃ×¯ß¾~|ˆ÷@  Ş~ûği
µÄ½îúş'E˜Ÿ1Pù¡‰ÑvKJ@p¸mk´D«
Á!Ñ<ŒêÚ …!ß-à’Aâ•2Õ\¹ÿšO@şÓFûøİ»w±>ÿrª†/ÿôîñãÇü•ñî]‰ ¤½©i£i±&Eİ:{õÈ'©B$6TÁœ* Ûˆ'iêIPÓÍ‹W_½å  k¾ >#Pxû?¼zòŒèÍÓ¡í.?€pYÀ…2Çó&Ï €…!”êu¨Îa‘j5"Y-ËEªAÍ‡‰Òğ2=ÓÌKˆS×Å=4óHqs-ÏÿWé0ÑàüÛÇ?{÷î³w_ÿöÄ„ßxüˆwï„£5i‡QÙMÓd¤FãØd"4JÌ¼YNŒQ8îy9àÓ¸"Ø©Aü/~øáÕ«‡`
hãï«uğö_½z¤¥‘^ödÿ;Ø¾«‰q¾Tjt± ïVì÷b›‚—ˆ¢
*Ëy7AœlLõå`Mç¢yreè=7‚¼œèÀSF%|ÆAxüùŸùo@æÏß nNÂX£çÛ£ek*u¦Øõõ‘JIã-%s9ğRàÂĞŠ8·Ì 7oüğäÉ4‰) ÇTœˆ'ŸÕ âT©šœXÖfÌªCJÎ‡PY¦G‚Q!T(AO§Bp0XCÑ$!¤!Ê^wÒ‰Xˆö=„ñÀğø·ÈÿNÿ¯ ÿøş‹¥£Nül@ûIG-±ú¦qu&ªµÚ(Úÿ3nu=m£ÛújKû'ô¦G{#õ"C2(êVnö7H£^å$¡Æ8Øù¤c8Ä‰£±'İ9®œAeš¦¡4-›ûJHAUság½¯¦_Ò^MÜÔ¡Áïãµõñ¼É{5S§"‡i^k/çJ•_Şöz½ÍM†Á%ƒ`êÍ›áùæÉTà Pèl>GŠHËè{ÜVË`F¡
²V]¨&‘ xá€ªµcAÄï¦Â:UÒ
‹« ÎàR6Q Â¨VìJjíaJ#ÉÁÈ>ÁåÄH7ğôéşéXÚ8Op\Hsàœ°TMçhN*›¥¡å\½f½R*å¤LCå5"Á¢ì¦+•ßEn80…  'Çá’Å~ ñĞş¥T(–‰UZcKTÀºjWÖ× y.¬.ı¸²y.YÀ3—,URI ‘),.­"m €.J|Ä<ü uvAÔê</ L²Ã íqN +>=Ùœö®A8uDÿb?•{°T,æ²yiX1Ò…ó¦şô _•ÌL^Çå%øH”.ß”*vwíµÂöÖå%@Àò§€ÀM=¡x`áĞî´_?*AJà ps˜jác³â:RÀÊÊ
fî É$úé4D–eôÛ†ˆ_	(T¡DÒ,€@Á	y®’¡òË²F	ƒP³jêÂáqÂ‹S‚€2ç÷ÒÉ#:Å,÷ğÇÕtNkÚ ı¼V,5ŠHÉ¹••fXªi ˜«›Z“@ ^l1øòéx?À  Œ9Ôñü%Š<C¶üVX°Ïª1`œ‹Âó³Å$¹^ãCQ×iYhä™ø×h6J9ÔË¦m“;ØÍƒÚIš¸çíŸ{×Ø_Ğ‚wÏ™#\ïQÊØ;¼ÇAØt‡ê|H…H	1ØOs‹Ë¹œoÂÿ€ø¤ĞÁeËv¾ñ(mƒí­mÂ n0áş} 1€°M”Ğn÷¢¿<ªH¸ë-\áúÀPŞHR=…	>^‚
‹ÚkQl˜•B!UÌÖÍ,) yt7yÅd((ºÑBjô„–OUÃ§ 8xcœÀ	¬L¸fÊëyâ”Õïï!; pŠY¾¶ı¯”Î!î¤MÀªILàp L¤Oª=ÊÂñˆ@@‘ .	„À óƒ'—À  °hèE†0(¾Qsƒ3Ôh©ôµJ!)B¢F¯Xñ@Xd²^)?J6¤~* hE±TYv[”h¡<x'P“ >©gÌ	
‰sºå{'/Îö2G Ê§Gcgy\\^ -,¢jC[ÉKB1j"™­(ÄD
õM]·…6Æ³ a°J€1W¸OĞ¯	`0ñ„ÈÜñ£Šê`íœé‰kGE}J•É»"<jLS_ü]).§JËËğTI$é‡©€øÅ¶>^é“òo	0`ÀóO•Ÿ€À{ÄC,÷ŞÉO/öO	ƒë}Ğåø§‡Brµ
Avå`¨BnH‹Å´ˆ_ÚHKYjŞá{ŒËÇ)ŞFŒ¾Œ 0gÅ	! ^5íhd8-Š¶`ô[Ü8,ëÁÀ"zeÄ£HZt^\O&Q3¬,­U‹ &Ïˆ _&º@×2 >YP…–¨p_aƒÊæısV']£JB– qÄ+ÆÀÄ\j}}éÇïi˜™¤íĞ…*é†ÚZ^eJvÃ	¸•x(®@@ L pÀ @ ÇÅŠ ´nÃg.É°ƒ™‡P3QĞ´
¥•Ÿ^y°GÊ*…cE*UKùlùWÃ…4Í2§ƒìÓp`4@œpïğ1­÷œèa÷ıoDg÷ ½`® ,TÑ¸`¬…ñöj
¥(‚‚løßÜ0aÜ72™øL„€ä@ À8 ŒY0L@`ºo4lÄÃÄ°j|¸0%èDøÚ±K¡Ä`ëGèÛ+«)(M`OÇó…:ûå-CÉæÅT‘ ´Ç€a_à,á8eÍÔé+Pä«kF˜ï²ìÀQÀ-ÓIèéØ¥±‚-	ˆãi8jÂëüÑånË şfS	„ÕÌ[àE–xr˜â†s—T%pz‘‹Ğl<cËŞ¾Ëy±Nİˆ©ƒĞ kêçl’€¡yA‘hcgº€MˆW³¡×‹ì¿zÀñcû<p »,î±æñpåxˆ1ø5¯ÁˆØÒêâZT”näp1t_”Ì8©9u3Sªtc !@aœ#ï @Ì8a
ÇíŒ`}Wªau]Ña
"¢)¢_æÊuÄĞ¼ÁÓg¿˜ß¨¹°^(³¾ešÌ¾ê	¬BÿÈò"x ¾8e{µ®T,Z¢hRJüúƒ†"Oä@PBAĞaD\º dìùá(ÒCûDñ`0E5Âo3Óº]Ç'æ¶˜'dÏ(ÁTŠ’1[ªÚÔš"J‡T¡(EÛ$’5†hò8•\\+hYÊ
zåÆÏApxÙŒRŠ<:g£¥Ş@¿:c¥=œ§·Y `¤®¡6ÌHë˜ë¢x-r’–#`áœÎTîÖ,9#wÃÃ\¡CT	ìl\ù/r“Âaîn\6„ïĞ ãÑ€#
™~´3š˜\ á,¢)1Oâ’& AşÈØy8¢˜Iı÷Ãœ¢ 8U¹f°qŒ…ñGà„3Ş5¼?99A©øôÔ;¹‡pØào– È0ÉYES‡2Ikb€	!ğAOm¤Ÿã€éí {ÄBÑ/aåTp> €­ÎÛç¯_¿İÜŒB¡XWÆz€ÀÌ§x¨ó?¬
Ağ+v&/bıè%,BÒ”Á}à]·Ë•
"–¼Â´eİ.ìê?ÖJ2iŠìğ  >aƒÿîşû†ş½±—xñâohª5&p•V«K‹š´€v–p@.5P,Ö'“w\çèŠŸ†FÑN'
©¡ó„L1ä%‘"†®Û½×¿<*gusúVøyû"ÍË*>…ƒÀ} p#Üõ4%¦>7M>Òa€¡©LBÕª¦”]Ì5›ˆá`WV}8Ã€`p?«»‡œ¸şWx±»Çjç“0Gt yCwií
P€Hš†+°&‡®}®®<‡Ï‡áùén7óè—ÿ{»ıkÇƒD‡¹Ûq«;ÿòŸ¿ÿ>¼İ}G3™Æ*ş˜‚€ÀCà½:ÊGxcuñ¿~Àv™uÑ†kĞ˜çM8‘=34ivÒ%:Ë&\«¦{¼¬–G+?-NÈßNO_ì_óŒ	t‚±ŠT¬4U Ü ¦×@?¿²–+RƒP08Á=të‚ÆB¯go‡ 6ışK·ï˜ş\‚ ˜muççÃÏ7·G§ı{w~ÔºğŞø>LØd·ÏHÉEì(ÅZTË˜$Ù2x¯–-c„
M3C&£7ádõ¦˜­}µæ¾øÓ÷|ôS»è$0fç×t’¹É2vF¤³Ğ÷$Tk•ÜÒÏ?ÿôÓ
òd…@¨“	1»vİ°» a
Ï>ïXx'4wÃøUä½Qhnn„:`Cûbş%âgŞfpş„ ‰‚qW0óˆ(•V– uglê…z^³QO7¤Œb›$ÁâviŠ
)V±¥²à *°/ƒ°ßçá€e…sÂ;8ò™¬Š YËËÙ4šØB1‰a&Ÿ9±AíÊD,à¤ ×íG3 !‹D£Ñ6+;£Xx1 –rk§óvDÉ£½Ù½hôu$ô26Îteß˜dI`pö	
”4ŒØŠ°„9«FŒTÓQ³Êùb)SZGrÀşİqº
 Fp`.ª¢¥öP5ş@ :äTÀş0Šà1ãÀ¤ A€Ï"'æËéR:-bûF •ëAÍl±b	1¹ñ(†p˜	]\D"4^‚õ"¡¹áEos¼¸=hG†ÃÑ êÁ¢ä3±ĞhØmZ,8F‰E*L6Ë±Æ‘ò!‚Ÿ¶Cz7«¹Â:v©4›y[–M4b}×3m]¨·ä‚ø {"¿T'<ælÈ ‚Ò€8gĞ{*!Í¤¬­IUŒÑĞ¢y'y¡\6•ÀYÙlŒfkùæ£¹áÜÜ\½@A÷+Î…¢$JÔp„ŞH¼1Œ…Ã !4<¶uæœ\&£FîÀhÑ„#$±Mùq¡gCw1†Ìä°!py1ïÈĞ-Ù²¼~ß·l(İ¾–l´ ¼ÏA& à¸Ç:GDİÄ‚ HùT%üòäz±±¸¾Vlg¨ˆCÃ fpéÊiËÁüp8ÏÎ`¥£×
¬tD(D:;—÷Bt¸€á$~îö­cª+†ÃGPÖ)¤üNğùÀµÓ™Fº qï!êlŒ(%±Ó±i«FÍÏH+ß'ı°Ò²¦&Ë²¥[V­uàë¨úRI®éh±¾K~T¼?9¥'‡{‰ÏÎß`Â¬XÑJb]+Bx,krR%Ó4³HEä0Î53ƒYÂ>>ãc½¡œŸ²`oûÉı7[HEug Áí;İx<~„ùÚãw¦5îiŠ†¡ZÊ,íÛÀR ÒySÇĞVZKığğ¡¤ˆšR¶-Õ³<ßpû…:ÆhVá/‚@~NÈ×{p„İısøÄoï	rœš…&ŠfAyµI_FY–Ê)+ƒ}~…t³¸ó"Uˆ‡hL3Ş½s<|ç8<ŠtŞ^Dw¦ B;‚×¡ğíãã;wîLwM¯_\C Á6(ª\Æ°AÁLÎÀ…‚Dåj1UX^ÂNc„£YwßUÖ¾XZxø‚¯Uò&˜Äsı>şkİÀÿµmUh	Ÿƒ€­şÁ~¿ûôğü·Ó“Dâüüúz•âééş÷Ø²}ÉÈ–´"œÍf1ZZ+b‡1x8pğä‰½nWº ~ûÛ<9CN‡_.£ÑMpÂv;Ú¾¼éêê©Y³Ÿÿı9˜sH 7iLÀBT-¤£h¹Ô"JµÕ¾•*k""TUÜ~sáÁ2NÕ(B)ÓWòºb¹p„–ïxqM2ªæ¯„×^Àv!Ä½ßıÛ«³ë]LšŞŸ%^%hÒÆ¥ë„-úG®¨!ÊˆÅ…È’FZìxşÃÆí†U·İx/y=|Ù­÷å¬-u»óÿ\=áÉv¢ÌåıÁÛ_æ_>Š«Wİ×;;(°Á/ó6óÌ„@è%¨UK¯ÉŠ‚êòâƒd†?Ş?0@ÛbŞlüPT+MĞ¢­:µ>qåZªZ³Í–÷¹'¨\…mœÜKì_¿Oî&®ï%Îğ÷«“ıİİı]¼ÉSeİ€Ä*Jª†I–Œ´,Jr$]Éı€.Z\£eÉ¶L \P…°O›~üåløí EÒ İÛ¼^\>é¼g^Î†zL{ÃØË¸n¡ =ø¡N j…¾èƒ¹ÿÂzƒt–3zy©ašº½°,c<¥B#VU8<Áå¹RûB+ı_Fü	„§‰ıÃ³ÄõÙşÙ«Ó“{»»GOîíß{±;)%YËbv'jÅdTd)REÒ¤Š†¤¬ëj"ƒF²©Ëİ0 îöæ–63?ì=>@÷xI«ßšºÜé´7Ùş>@Á40Z‰ ¸G™ßGZƒ‘sqaÇ¡i>FH&ŠwÚğZMãèâ·f7©r*¬bFç;)ºÑˆ›.+»o¤‡Ï@À÷v'û‰ÃÄÉYâä8Ü=:ºûjÿìú”R$k/³•4hP)‹•êzUÒÌš“×P'äAK²£€«skÍuºáX(Ò¦åmn:T:_N	„6v§à¶£~âFz˜óf¿n×[@ æ’ñôˆR€£aéè”lô’´Ù:R¹FVë²¬T3yUğ[†‡™†á[Šw`>t£A}ÜÙ¯_n½ ‰ÄõşÑßNî!]%NN¡Õõ´&Ñ¬_ª)"r$ğŒêÔeÚÉjê*ƒÏ„÷éyİóâ·gà	¤Ê³†‰‰P¶vÚpê>x>ÛŞlö Â±åè³Uc„€'`½nÂtÕ²è—™6‰´×šÂ¬i8XĞG«İÌ*­0qTdIß2…~ËàœõüÿycCâ]óéa"qøş@€÷w÷Nw÷Nñ@	&jÃJ)—ÓjR
 ¤+š‚è„“¯fH—×ãº×7Qú·cr@ÊÛÒG¥% BS8`ıdo0}'G á®¥Â±$ŠV$¸>k¡ 3.½£k*7ho[²@j\†¼Z‡·àmø½áCuÂö<E%‚xø4xÅœ}ï|°ó½<P1âH§,©*Ù_µ´DßøJaÏÈ2ªè&¯ZaB!HÒş·È{=1Ïl±ÅŠ†hçÙ3Â íä›àX ábîv×Vm”­íbî †Eš™²Ö¨ĞVÃ+i­™†>[E3Y'Õ°@¶)X¾aéX,è ˆlB%|6QÚT‚dAö¯à•
šÕ¤´&§±™9·†jemE¤ÉÉ€‚¢ÔÀ[ÎU|ÜfwïÆF`F„6¨°ù*9h²·¹ÚŠz6Eœ ¢1lqõğWF‹(ërñ™|ØÊvŒË˜ñ!-a£›’åß¼ËfDÔói³ÆB‡ïò¡P÷:A _i °>ü5&ào°ƒÖa²g	"¿)IM[)KM¯UL×’9è>@@à¹‰J±®¾ßöÌn÷H!ÊfÍ4ng,Â }Şf ´;ÛÄ•ğhĞ|"£0ŠÇîqWï·,ÃåE3Ï@•&$?úJH›}Ë‚R—Ù&Â´˜§p§Ñ±b#©ˆ)ÇÁkê=hXùhÙ‚‰’IëH¯Æ Ğ¼G.#?˜¢dæ¥bZJb¯X¡Øh¢Y¡}ıp½ƒ+÷Vl¶‹bù.‹‡@t`ÒÛ3J ½?"c`ÚÌ%Ìv3Çãı³±Í–k)¦IMš"7ª(‹"í×úñD“LhseE"“ÁÚ°Æ<Ô7®ÁÃºÄóE8éñ(àåc`<.XÍÌŸH¶† R5’1UÌî$„cIÓ´­Y%W…„îx-§?Å\»{‹ÅÃæÀ…Z{ô¢·õæÙfû-âá8Â ƒ·æãİ™Ñ­8Úşew!I37Š«+K˜³WKÅå¥*œğ”It(›:oY5‹cÀ$H/`CšJÔ¿¦;pŸÌXñdl®2Á÷è¶èº¬75ÕW¡¸jˆÉr³™¥q‚Î4iÏsüHánøb&nCw¸àû°T²Kä†v'Ú~öæÉjIÔ[€1Bd4ÓB/Í}uÏjFZ‚cÔì¸ ]/`»Êú:¶ğ>HaÚ'£²ÒÉM¬–Eë6| r0¨“#0¶¨ù_ac‰šCñø&`8z-\
Š›İ[Œ«m¨“mØhæšøE¾ë»}ãªŒ>º+ÇÉ¢X,0 ¡ÓÛl_D·±Í$UÎ;…-°"1Âp ÌÍuûïjjßõa}‘êÇkjh¤¬…Êú*rBK¶–<,2Áğiİ'›u:Ã÷“áó¾ÁÒy–» ‡Î<üˆ\Çm¦4 ƒX-Ÿ•qw°P@ª˜èâ’ñt+óöLø=>&¾€•rÙëîÅBíÍŞ0ê´#íÁ Ây7C|‰İŠÃ}ÂúŸû>âŠšºnü&×BúUéëá9±BŠü*mÚNå´JÖ›¦+(THñM°\
 gglÀ¥}¦EÁª'ñ²ò“ìĞ4U••¯r6¯¢s¨–o©ì;á¾{Ğê¿ëÎ†oÅãÓ·cL‡cêüÖ%J†^(43‹ÙÉhfú?Â±a p£ô8ŒÍNÇ§c¡éïĞ » Áw^Y·’ÇN‘¾€“Z]«®K•R6+fjŠMß &W¤»¼J<µ˜±&ÿÀ÷?éCøØæ¬©Ä(®àùªídJ6
ãL¥´º^Æ8CV¹ †&QÅÏy1oÿ pĞï³îsó¯ŞM‡¡0s'@l£–ºÕ»;]kM‡ïÎNƒB¿îĞi2>…¹™æÖôÁ`É>Œ.Z…Ñ4R"Ñ¹Ó7ÈÒbna)U-@u5êZ^•![AÒ±R®Yá?é"‘ÅzËª‘Q8 ²ÜÂT#|bãºê‘zi	Š-7D](f£TÂ8‘ÕÈè˜Q€10­Ş¡€»A¡õáOßL«wÿú—ğù%²­Í™¿£İšşë4†iwÂ=œ
ƒÑÜÌ,FLú‡?_õİ L–ãTf´w	)"+–ÒÉ¤¤%WsÉr ¨±·UšM²a7Z­°–”1øVhsƒÀ"Õı„/›S×2UPšY±RÓVÉ6¢¾Èº
J€ÿ>:±·€˜óİ‡?½³ºÓ·îÎpĞ*o+€ãP•ãáa58‘²ãp†fmİï®Ş!ÀUO@øU<R³å‚”^Ïe‹k’’”ÏØõÜSÀ… U éÖwiS/7TŞ=
x²XıÜŒ/càxz Pkz³	ö•Í>üÜ„µÌª@
–ªÓO`ûE?€@/¯ü8@Ó\PØ`|°³ÓFA7ãáQts¶Í0 ì8‡‰ó_ãW­Öb‹ŠKÊNğğ’ÔØl:©äÖÒY|A\“è•œº@—¢>Õjğ¤:*
ğ¨)5®í#o1’ı·@°ie5¡™O7LUp£“ôY\%qØ[N†›„÷¨0e 87 ¸ıâván867b(ø7pÓÃwÂTK…M	PÏGp„ÙÙğ±yõ1 Áwo‹®7;_NVêëËÙ*tĞ24h]%!R=¡}Õ…ZpšÑº*ÉÛ”`ë„KÁõIÅè|]ašçx†Ğ´µjÚ¾áYºN4 °¾e>M…ÑÇón(Ü€à÷ÜƒÿJ$©‰6 %w¢ø÷& èpC	ÅÂ°Ùiõ
${À$øuĞ8`ñÊòwÒb:*TV¦Š… \5¸Q·móef±:›ô|^)º¾C |4OÛ§ ğ{ë }´êMUËØªÓT|Õgs_¶ûŞ~ô1–jqq.\xñ¡à±¦ÿB À@ØŸF&5òÔ›-LVÛd=`@ »ï¿; |H7<ˆ}‡7AŒy|Ç§ÚW^nÔÖréd±iÂê8í±®æ²MÑdDë²îÑm2‚Ïqé81€`¸Ôøs`nçAn:³®£Á¨ÖÙyq†çÓMqh èP§K SaGC]—İD¸9qâ„XÜˆ€€èÈjèN´·ƒ&‚`éEaÀà"›	†ÛöÖÏHğ"°ÊìÒÊ“F± ’¹ªò
ËãÉ_Õ¡L”|AA‹ëfÂÍ±ù áàOps>2a¥6±i¨²S¯»}¡>ÙhêY(ÑNù¬”ñÂÿsrF­m#A‡‚!ÀÁ¥Ê%M¡ña'V 1Ğ¼ø !/ÁO.Üõ¡Bj•”XÀÕ¶+¤Ç G1äÉ(KA¸å ìtÿ™µ-[´Éµ9‘åHÒÎog4ci#
€”^¬trø|ƒ  @¡VÃ}Çï›Íæ1~ñ¬¾]ŸÖøFÜŞEƒ@4°¸IÜ* @:Zœ¼w]çôİ{'½p2=*Ò¨KÑæ8°£ˆ*‚,A? ŠáëöÊì¯ ‚€Ü¯¡L_9—(ÙQôìL„¢óyj¢¤i¢’ÆX†Æ¢3µu‰p¸›‚B­ş¤ºùúÉkÖcúyY~ùÓÆõcå  ENôœ¡¢|+#¯ÇPàö¼ÓAÏUø:[QsĞñ¾+“˜.¬R4¦¤œiB9¡‚2 ş0vÂ^ĞQRt…”åŠ8…ßs”ˆVR#A˜Kg‡Ûˆ@¨…¿?—Ëe«Ñh<nTŸ6>{ñë/¯®j@`»äåÜ—(GØü0®Y;%˜Pº|NÃşéIV¡P,ş»{¾@ï<Á(oWÁ^‚ Ê‹3ù×¤ ¡Ó:ÑÀõTl+ÕQœ¶…lÜ¡æHI	¡“3€LD,¤»×»È‘8)L+ãOW­ÖÁA«Õ:nµ®h¸
æİ¹#À01*t»¨!©0á€€Ğuƒ³ó6±æ…ı¾è°YÒ„OõVR0_¶§hæÂ}bª”Ğ‰Üæ*´‹»–‚¨ÚÆ†6èpGä,–!èÃ>+ pSîêsë¸	ËšÍWÜ‰æ` 3B)Õ€ ï–¾û™;I—ûıöùÉÇ?ÿè…‘k#dÄ+$=GÌÒÊ¬;–õ2¬¡â NÛÍBBt*üÁÛ¶ïq‡úiˆRĞÊîriz+«¦ µÑ¸rÜü­yavŒÔ‰©rÇö·-l¡u‚mv¤‹ãÒÜænûÿùq2Œü0f’kl5ìG ,Ò‹ÉSß„€&Ş!UŠø×ƒËHe¡È°¬ìDg¸‚‹oı”<Ğ2S9x¡bi¨4éU·ëL¡B£R¦¨·^PPlmmìâC:!T85¬s0@)‰m K	jOŠ…8–‰¢â¼Û¿À½ñPÑ‚Rüg¸D·ïwuFİõ°ØRãŞß†ÀÂÖ%Çñ²äd’‘%©xsŠËœxRA
FKHkJúV76_ìs­ {)üw7vª¸S_İY'8ô!çÇıkYÒoÌ-£`À!ù½”ìT{¢áÃÙ©×G¨3e&cÇ¢ï‡š ¬X…ò·ùrÊø¼¼FÿJâ8½í;.\©AdGôÎ~oŸ¿9qúèõ”N“ä*ëÛôğºãñ
ˆÿúKi\o×‘<)m Aîííïˆ[= ˜' fR Úv¦XBtİ·ƒÓvû¤…BrpH†qìF!0¦«öç&ææò|ÃA§÷i¾“Dª´$Pº‘+ÒL¦i7Hı³3‡ŸÓÍô2È9YDwj‰^¥[«ú|£n\ßP êĞäMˆO
{»ÛıÉšNç¾ÀÊRÙCÓ³ÎÒ¦{Ó††øœ¡vTàûaœPˆ‚Jš-“ô+*X<ù_™ ´f¦Á&‘2tjG<tQÍ›[H
l»‘¦m­ê—:}£§,$kcò„ÃŒÈ-6š™üJ†™İXEïÚ'}¿â„€.¹¤§áF‘"Y–
6å<Y+KşğÁhjæ8—¼ô4&Mìc¹(òæ¹1æ•ÅÖæ:»ÂÕF777Ÿn ÑhD¦äV•ÉÜÂRÉ¬ í şßÃS%üÀ‰”+	S9Gé
!AòW‚^°Ğ3Í!<J5MRĞ¼ÓŒ×šÛlx‡ÎÎ!°R¼[K„´6·v÷àşãqmÄxºù<ªÇ4zmÇ’–af è™ô€¤À,™,©à„'NâèÆ”F_¾z¡¡UŸY^„`Äæ*r(|¨W©R\€	ÏÀ—g¥•¥ÖÎ:\À <aÁ \Zs8D—!œ	ï3%õmŒ[NÖó˜rT6Ô@»`Ãıš oùCÊ­Î—VTd°VÒÂ|a™Â?†ü ‚ëì²e%Ä ¡$¡)½ÆTXhû¨ÃN(9În
ÍïA`ßûA-›ı P Ph .8¨`ÀÄà``•¬å›äÇ)Iú÷ÿv WgÁÅ	K…T/¹ªYı;ô/g¬£8„adÉÒHYúè	‘‚®h¶™7B·×-ÕrW$m¤İ¸7pOu4{/uÿÄf³$]´·÷dÉœùÌX„h5K¤cü±÷ôõ˜/;ˆ°‘v{I—¡2ø4€_p õcš‰ƒ'×Pàò8ğ±ÿ±•“r¾á¥‡Çú€5\óÒT§Èë¨şÛˆ=™NoÛáÀsŞ…¢„`aÏ®Í›cbŸøjÜÀı@‚T›íÅ§ÈEKp€ï/ÒÀŸÎÃÆiÛ4	¯É,ÑÁû‘áŞêƒq–]4é¦­“ğ,Ÿ—kËF°½7¤õ0ÈW•Ç‚''=ÖÏR8TÌ‡šNº{?‚úi™Ìæİ›5™«£õ;¼“µ*Ë6+Öér¹Ù,Ó´@·1†%G¬¡Hï…}]7Õn÷,“`#ëôD§ ½í7‘ùlŞZ×ŸÂ0çyk! v¢À›ç¬)Õ· º}½İÖ(Qwuº°ßÈ°|"4M`,Ğk½C—e1;ÁoÜ¼óF`X°E‘ÛNõÒî(¿Ë¿`¿îTÑo‡>Ú¾‹Ø}y|È„»in†{ÃAˆJ%\¦å"ûØ€6Ç9$1©±Ñ0ÓT’¨“Ã‹†@!èÎ‡Ğà£Iñ™ Ğ~2*	6]­Ò"³ÌìŒ3™ ÃA¶(ËÂRÌ„!Zî²,P‰ÂFÿ„» áY€„H­H¸D¬ËÒ"¼d$B‘#6¥´=ññ‡53jmpÑ““ÓUŒÑfWR¨ƒ€-ˆyr_ı\e
ôÿÿˆİÉÒGq“¦ıh-)’uº/ˆb	,şBR•yÎå/a	ÁZÇµK¡Ê~zãÜŠ*!.>"ö…@a¸$…NÍ|
êJqs1Õ4VD?§ÒÛ¢ã}·Ù#>ÜŠ¦œ¯âÚâ`ûšyî	â4$a[øZª£±¹ÂQÛ@P¦ÑüÕ`¤ómC¬k|…ÃrQPœHõ<	K Â!> ¼?€¥ÄÊØT
®a¾c6ß»îæ‡nMÒ„Ş)„˜ñmÄíÓå# QJø"Æ #i€@AgV6$¬ÁèZëÚ{_×ºy°–'šöF àLˆÌÿqü¿Ë	_	"UÕÕ%ú;„»•sëuCB×„Y;~p°„zƒ( Ï°şù#³@€%§ò:7(¤‚M­kãBÏ¿'üôLú,AûT8Ü
x$Z¦OÛ¾LL‰‡¤¹,aCeŒWJ™Ñ´w_Ş”z¬@í<¥gŒ³!¼ö/‘7"6/o}ì¼ô¯$AëVw¨dpâÁráù F	˜S*%”£¢ü
á>.—;ÿ@é,¡ú3ÃSo]«MÛ:Óm—sÌ|C7½&sôñ€eEcZ?mL.p‚D@)÷§8I
ê?³…şñú¹å¿ÛÔc®YBÛpÁXÓÑä°¹ã+ŸfqµàÍ$^€œ¤Üº‘$`±Ø~ÓwéËËîoKØKhÚ¸Ê»îP)•vÅ2ïÖ¾$¦Ã™eÈü#Å[ã‚0Üö àD²ra¹ÜzJ¼¡ÀrğSïcûY(Ğ ÂåoæÏõ—ÍÓ„ä©·gGÌ<®+I.ré'O‰W¦¡t'ú`	1Fo‘ùv»­İ{v$4Õ² 	2[ê]#¯Òû–H"1¡©µXŸ˜vš/‘†Ó³XBşYbfë÷\2ĞÅí]Y[‡^À,<—€e@šÇÿyS	€%¸#c÷ÛŸ·9eÏ›×¦ğ„¿Á¢™T‚×|Æà“+i$îEŒçDy¼k‡ÖÎ‰ƒ£3a×	ıã0üîÅÅó™ĞòtiôJ¸sòûVÑQ‚×B)/kšICÊK	ÆlBn–ğŠyÔƒÖÉwÅö®›Í†ÿšú—ì 	şÓùnNÓù"2p¼Å‰¼(èÕÎUÚºÜİE×`İuäg‚·ÃrÈÏ¤}öe…Cã?€É¡€ºÍ5¯èGe3áöÁÑéº¨Ì'¼*O§«ËÓ0^]Êó 	Š.
¬À‰	Ì{¨âïîËÍšVĞ@ü„|¦Højæãå&ËÖwuw(Z™ÿ›%´QÂ„o^Nãğ8	{Q 	z±K°6¤ƒRÎWßW¡øOt±	„ü¯uÅó–u[¾?ØTƒÌQYy l@$ìãLeq‡iÆğ8´-ÎjÕÊ‡ÛèÛX{(×)5–›”NôZ‰„TÀëb„">ƒƒr× ®Ôºd2ÈísèÃ•Ğ‚ ¡†‡ßşq8÷R	â 9mYcZ'Zlê}1 ĞX¸=)‰è,K Uw½CƒuàØ·R¯V,¢0NÃÔ£õ~eE`	r‚¾!¬&­dv­›ƒ{mve‘é„ø0¾›TBFï&ßT´-Ö«ƒÜ<:|ÔB+@Â.çiêU;ôhËèèÀ“uUÌxà”×]PÈ‡ùÇ|¹ó&CQ¸("JÓ‡odëŠDX:fce®”)©“?×ã#l’
¡*íwıÈà\|'¯Ea…6—¬5Ş©ÖüÛ( vÒ4¡S‚±ñM÷ƒ—Í"ÄG¤VE‘<½N©'4u£Uå¤À5É““;…¥õQ„”"ÿu Nù"¸JµÁvÏÜg8jÎoˆ¢×
¢E€6İé«›^’¬ i™€#’2 FJ@¬”´Bşc9¹WAšOË¨Ê<òÂTPĞÜ¦ÖZ©€VÅy¡BÑxCÀg#D ‚.A‚Q)ÀÉ¨÷Z#£óbÚÇJ ñQ”bíD%œ@Ep4 ’œĞíÃ°Gıï»~?ì._‘\ ¨B°˜¢O‰¿âĞ	äïDh×¥ëP‚	‡x‹5Hæ?õ`è6›îØ÷¸?&'œäˆŞ„¹­µbşÏ…¡ĞÆ¨Û²ş¨#9ößkïŸ]rBXa=ÀúiBGºå	DÊ¢]e«GX²ù9ò6XÁˆX±W\hbD.NHtÀ!:á
“å¼d5¦\¿æsÈ²$Â7ke”Â ƒaG‡àŞl…öâ›—ØA¼ÿ=–ü¤T;›ú¥­•VI¿Õnø<cACáiÑ ûÕ%@Äì¡à$HÃó)Wƒ4åÇ×?¬L%Ü$$ç<™b€¼šÜ=Y-¥ÊúÂæ;P0û/rÅT©¯kÖ/`AËÌDiÌñNaN0d·`01W‹Í=ŞãÆ‚ßÌ.ÁgSõ Bûw0å¾§¸_!A-@ƒ6€#qa°ZUB(@5	LP'—m·0|âÙ“Ğu]8Ì-ÆqLNñĞ@[ì$l,”Æx­´ƒ[¨’(©ƒ)ÆÜ_ á
obÉhÕa È }Cîı’}Çûÿ¯X4Wº²Ñ ;†‰•x"¼ãí¶&ŸR“@ˆÅ"Dü{ëkËÉ}¹î°Ü’§aÄë%@„Y%ÀQDÅ%ÌªÁ±y¢;+çå¶ËbyxŞ–	hq“ Âo$@šfÖ&¬‰"¡ø¬àe_‚fª—¨ËËx…€ÔA• ƒ“]Sk¶8XtËNĞ°£)=5j‘O®R]¿“0ANÉ-0‘›°Ğ›ŞPöw^½ØZW¡€e„q	Óˆ„œÕ „Â$ñÍáNƒu 7È0Õ’0 õÇ“Kh¸¦@»ü¶Ï´èhïú’<C”ğd½Ür#„a(
’•şEIŠÌfìeõ“IˆhU1=yØ1Â§ü³Jyl©’+›Î'	ª $<åS	°Pqî"ë–Ô•ø&Û°¬3f!ÁE á)ŸK-¤ Ãé¸zÀ˜ZºÓ”îì¥NH0Ğ(xÎoè/@¸â&l8gß“Ç+&¤\ƒå˜x8FA0E~xWšÓÎz•@Óï	õÊ|uEÖÜŠ0Í‡kßrÛ1Qï›j³FlÖ~C°0d–@½@koº78I¸mxnË6j*	™\	eÌÔåÔ‰¡áP5iåTvKÚÀœ›Çn?Û©¯õªæFBY"•÷‘Åe„Ê…¨½ M¼—Š&a(œCÑõF¼y“ŠUí^$ív+‘÷H*~°†¨¿âÚ^Åv­Ù™%ÑÉ‘O¡%jÌ¨³&Jf>õfÑ1ˆz†&‰¼‡ÌÆÎ_†&IdÛ÷(’´x;KÜ+ì²nd+¡ ¤•˜=…"+¯}%á?n¡ò|fŒ¾ÎãÅå˜“¶%§>&à'G\ğ!4Xhr&¾É¬v]gu&:
İ9Q9Eº4Ğ›ˆâoŒ…h(x:`„å uÉCıËcØÚûdm}ø6ËòÌä£vhšşE—¾iì®(£Ê6C« ³Û&]G;øuhfüÙy¦[ßØ²››„yÇÅØØ…2ƒ«WZæ!¬¶i¯fH"ÃøYpBŠül1¨›‡fŒ“½F³Üp’ıëGËÃØeŠŞ¶™ç¦›ÊÕóXL÷XŒùÃšm¿>›ƒÏézv“yb£»ï-ó¤îvèï”ûah?$O˜H ğ¥ËÌÀJ›Æ`N<%ØÌ#)|ûëÂ	}ïüê«OR™j™Û‚f[‘aŞWßj>P?!>‘¢¨í$ÁÇƒ*+ÈœÚKÊ/ÇÂy¢Ü¢”æ„ĞÕ!ÔŠDšªûÄ‚¹‚ïÛ±(JØ(ctuGÙoĞ	Ìn;Ë;-Ú!æÑedL=TÓZsó$0˜Œ/â;b}u&´šÙ³b/ƒDÿ¹Æ¨;ê¹~¯qÌgšÂuÇr2¤çø·eÍnOl{T6]…™°ŒøV‘kÂ„ıÕìF8ªJ…ƒ}	c¨`¾f=³Ào¼`à!Ú°øV=1y~&Ö‹„{/Ã!¡îÙPp06~ˆšÛ‰'En–õF´`
‚’1QQNoÄ|Í•´P›v5/YÃöI)Pm7‘À)z’áĞSÕŒ zE)å.›eö—	Ÿœ1±hc?TEÍ„P×ïÇÜy\3•ßg®Q;Y±Š¨´ìÖ¨q*!x¡’ÙŞMJr©å/ÄúÁ6ªwÑ•k¬†zkY¿’o ×“0/ë²¼Ä‰D‚„ÁŸÃ±¼{nZÕÀs&$LRŠ~X—u9¢³ìÙV	·¯ší§ÆH‚]Ö] fgÖuíÄ\çXÏ;L×HÂijs ş|ùHÂ¹ıò ğ›„/l»I/BB1âÂî8ˆZß1‘pjö—„ë¡§€ñÕ°Ù¹],J$d‡oRúÄªazxæp4ŸŒVÍã~\{¬ï›8À1È¼fcj”í’?$LÌ;aía°BzË{!>ÑQ—R¹|ÿ"n¼-Oë0Ô•”Ã=R±Ô<ØiæUCrµµÖ$ü“HÈ9DöÙu+÷­vëHLpP H(knŸ«C×ıM‚?¨	·M¬¦^Sp ÒåOk09ÑMHÈ¨ÿMÂÌnË##ÇnÏ ¹úŒ6ğÔ<Õ“„­g®7éä=ÃKÉ„©{oÛSı'2ù«7µ»VÚÎZßèw&ÌÕVµGONj›“¡³L©¹¾D·ÎrXßB]V#jÛª³±o¦‘–¦Öı°-cP;’€u¬»3âïjH™ë™C$á“5| ˆZTÉ„–¾H€­<6v¡O!\ú›	ÀŸÆ»—é¡‘Tg™×Ï$MHqÂ¼ÇHĞÛéuVŠu+½òÌ„Õñ NJÙmYšMê	ÃËàsÇ¿Ñä-Ïîğ
æûKó°‡0:”ø¿Æ£ô	ì·ï HM=F‰ëo&œ¿çju0„õeÚGÉ"ƒ¼6Kt¨Š$Ô­/º’ŸH¬ üĞîK¨‘	'	”=hÜ=Hœ.TA™Ş%¿uCR˜ùÎ„Es+]ëy?şOc(ÏP úyKÊ`»Z8|fg&d	'<Î=å^æ«1ş"áX•‰¡sùü8J;ÜQ|À(°åÒ§µp™ıSYH ^³ ˆ$”ÔA§ï°ç¿Iig¨sÎwç†ªwVªgtnßk‰î“ãŞ;@;7BBã\Êç®t¢²²»@ğ#C"Á¹Ôµë)Òß''=]çB€æz2[AÀÇ7]¿æD›ØÆŠêä€<:½{™ÆãHˆ›± K»§)£„ªLí°*PPRpuİôü&È‹B‘|²¢(0)¤÷)ìÄaŠ±`sI·E:§„´0àL.Çh/P}¬¶I¤ò_†ğÍÜÌÔ§º(«Jªí ¤°º¼ŞW%D“¨Då3
`FX\·g!:d…A½ÿgçêq×‘0i±[j›Ş´oÀĞ	#J€”( H€.²s†½Ã¤:ÃD›¼Ìè@¾Ò~U$Z0ŞÌFc`¯«õg²ªXõ±ªH)hñã¢Àâ*B÷ıwÜg¦¾ø”Nº¤û®+)Œ©/²¦ŞÑtã‡} ×‰7q=‘Tì&éGcö×æÇÕ0ñÿx·¤"é¶Óî
SâÑÌûõ/ÊxH½[›şˆ¢c;ìQçîåMzL|QeÒ°»•xvRëƒØnñƒ¾G€¢ìí–?@³Û¥47'µz‡9gÎ]çã’X<QÓŞºƒû l7úq¦øªcã>ÜÃ$ˆõí·¿ •úökäL“¦whÓ(Fë}B÷°%DŒø!#ŒÒûP‰üÜøÇ>ì§Jü:JS¡•1{V+=U¸|¦>Àù)#5ùHi¶|M-ÑéôÅJÅ´O6ûÊàòûú©@NrqïÒRÃ3C“/Ğ!%:SFî
ô½mæ\ÿs}+ÄÕï
Ÿæë0ÍÍÜ.RíY¬Ë—¯OR
ó2ùqCØv—¯}i}GĞüœ”ÉÚÊoú7Aûk;Z²m&`ª6Úàë<İ9ÔûÒÏ¥ß”Ñ›/­mêœaRÂ¬¶ªÿÌåXSá6ÆHm@PÆ­Yëš)n©´kkJ”Ó†kÚ%µ"ÒÍh{(@¿œbÜzgıP×u_d!™\s6°C‹Ëä¬W#ºÉÎCoËUr•àa0øY&‘„L|"ŸÕãòíİì%—ˆšÍÎõá_ÊĞ=-“è&NÉg€ ¤EÑÚj¸æRfo7Êûb«ë-7Eğ®iëŒ¦çR·Ş6«Ê†j\óƒ·ıgæ¼-‡uÙÖc†Sè¥®×Oé™´d³6ÿXÂ–e¡~ƒîµùVR [¨×“ ‡Ê¶z¨CŠ[AØ,¡®—ŒA‚±¸?¥Õ6º¶ø˜u@nÀ³sç­lõŠ±Í{QÔ A'×çÆ„²Ù4ÕûmbÃ7C[–‹³µÕ´@í½EÚŒÃ‰PĞ¦˜Üt:®ïG;¶+x«i“æÔ–Î•ı Ôµm*¢qm†ƒa®¬;N„¢;ÁŞg¥ƒ¬í¸•Ñ¿ğ(¤:õU3MeÕvõhË©?)ÍÛ€°‰Ûì}olĞßÚNU5w+|ëçÊwú©jzhrC8Õì!P~û‹º÷Í?Û\Ğ¨íPÚ¦ÃãH¢­^ë[?o¤A]ûş¦RZ¥z7§Şú»‹÷ÓTd¨ªMfÀä¨fİQ+Í); µŒ Aë®q5@ €‡Ö•·bñ®l×ëâm{–tUY–ÕÕ¸pÆç=PÚi»mŞUÃíµ¶vSÇîz>ô`5Ké†< $ĞW™CÁBJäñz¦:˜lÏ ø'«M×Koç°mCU­ªvó!¦ŒŒ AÊ H®`YíÆL,340Pl«w^aëu©+hC P:™P´q·6@ëë¶õ•­ÕRg°Íñ‰X‡²X(N\UŒî¼ øë	ºU>p:¼Ö-,¿f‹„-+W­bpó·ÍT»9îÈÆÍKäepãQĞägJô®‚,ÒØk‹üÀgƒp¹ „Be„›…ë‡aÊ²¸yë×Xæ/òjlŠ×)d¼Q……½ŠçFeVL…ÁãƒPùçueZ¼Ö“\³kÑ²•ÕjømáÒºñ¬ BóZ½²áKQYŸ´aª	EÎ˜Ïÿâjm8´º/«ZÈµ±%o»î 
7q}éš5SlÁÌŸ³Djq÷nĞ®Zë_$Ç÷Ô`WqáÂ¨.è½~Úäá(¾J ¬‚é2ÛéÌúy%9F€Ğ^LN‘ ÄŸ f^ˆn¶µov^-	¯C|UÌÀ¦/1İdı¢²:hÚ6T×Öà­ÿ¦Ce§µ[¶NKÆ°È´QãÂ¨×Òö_ÖÒµG¥ÈÃép)î–m+²`m¿uËzÅP@ 9¥ƒù#‚Ğ„Î;¿uui¡^QËòõ®E¨Ü´±[XnÛì¦7€IëÇtÏ òıİğzl³vêDAÛ„±ëÌZ¯OFóŞ¡´9#Õ„-A£)ª7µ5®/(±fˆåt6ïR½)« ´„p`;^*× ßÑ’ñİ¹Zä@SÚ±€3†¯JÎÅ@4Í€ÈªæYøNEéÚö/F?¥0*Şüênğã8ÎıZ‘‡~›~“æRÏ£?ÆÊ¨êÙo@ã¦Æ·F#H58Ì×©r¶®…èr£ŠĞ7Ğ²Ğæ_«¼§âìÇú‚ØiÕæul‚”ë4ÿ¶MÍ4ù±²Aç+Dç~S©˜¶ŒÒŠ6Kó) HX.yÁ¿wİí˜Ñ8úüÒ}?ÒZŞ»×L³·ªøş’ãQèÓõPÄŠª4x»û»Î^»“	‘¿v÷S¦µ4ï—{w¿@‚ıÖ½Jh;c´cwÏyïğCéS×]ß2!iZO]ãÚ³0gˆÊ¯]w„ß”´ü¥ï) hA}¼¾ "<v†)~QPû'F²ŠWŒ$g4uÑjA|à‘Ó7jŠâêã’n :i™Ş¤–yãâªH9›ˆ«ÔO)Œ X%îl±ÂŸÖÉIşQ£T†ıŒ=ÊD”¤¦¸’â I<É½Ì@²†Iéw´@JV¢·™Wf_ù“6n¬‹Õ°^ë9›%Íã°[šÉÈhm4%½Ü!¤D³H’I)îfORt¨Èeƒ}etì`A‰_›ÈPP#Ë~áÉ “s/2Fpyˆg€¼Q S ì¯®äwjşp æŠŞq?î)¯ÔØÌYÁ1ÃLŠ+²³‚8hzÅ†°˜ô	™%%ñœ/K5GqL°½iÜÉi“gì(Ê¥”ˆY!ŠjIšÒ¨Š±:*•1Ü;Í9(¸áäˆF%R’ƒ…O-Åß‹~ù¤Ò'}’úôô‰ú$!ş;I!¶‘$$Áôh 	±` O	B#±I @FÛ\¨ğ    IEND®B`‚
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/html
Content-ID: <frame-BCD39C632527B9B045E1BBBE5AD1F458@mhtml.blink>
Content-Transfer-Encoding: binary

<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body></body></html>
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd----
Content-Type: text/html
Content-ID: <frame-693701378F0C5455B2D9CC01FCFFD84C@mhtml.blink>
Content-Transfer-Encoding: binary

<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body></body></html>
------MultipartBoundary--3ehGnvAVRIczQvc72Anc0trjs380MhlCEcjwvsraJd------
