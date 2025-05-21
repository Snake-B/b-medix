'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "4927b5b75e2801450f3ee3a69ad516fb",
"/": "4927b5b75e2801450f3ee3a69ad516fb",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "b05e6637b0f3ab69673dfc529d8e274d",
".git/logs/refs/heads/main": "fb43637aa25a585e763ef3a977a4e718",
".git/logs/HEAD": "63ecb5314b2ee660606011a3b8695246",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "643ce22277c7240f74da5ab79dd8834b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/97/150a874523b6aa03e106cdfa9678727ee6c9f7": "f2fa86c0d738cb84f88aff39c6b76088",
".git/objects/bd/b88dfeb12251dc64fdfb136da8286de925028d": "f33e361e12df603f700eaa2d946dcd9a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "1304f84742e4bd6b7dfd884be9e96731",
".git/objects/0d/b8760357174a842642737ca57f3dd7b66620a3": "85223a78ab8e8c1012dd583cc0f9c01e",
".git/objects/31/f58f7cb0f6fcf2a1f2d95e3ce1883f4a86a203": "d68d07560065830da34bc7688b2cd1b1",
".git/objects/4c/efb65fd7a9e7bb5dd55ffd2328a0586fedcbed": "3d6524bc62552066ebba4f6aa7c71b95",
".git/objects/e5/dcd9c231055cd20aa8f4074c02a1ee34215e2e": "7961055da449b1ae52356743ee45a65f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/27/86161fa933d9d36545d5536e1d63a02fb6de84": "63cf45be61704d8e21927677f8aa09f1",
".git/objects/46/57a2dc2b44d2f2fd1a8bb9b21f47a0fcf921bc": "870f4684dc04d1576394ab1ea892169e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "af01256f5c53d9600d71eedc5508aef9",
".git/objects/5f/8c55f000094c24d2643a2b76da708d9358c8ef": "26e62000e10549b7d55ffa9e0ec52f4e",
".git/objects/79/d9ef696e8247de89fc98eaab4090870bbed4c3": "27ca6ce495d7151240d9d1976294f269",
".git/objects/ac/7e5afebcebc45367d5f4fa1e6a5a39fb0f8530": "1c426fa8801cddbd7265e1c12776d497",
".git/objects/86/c43f027587ea81bcf7f914b8e759e27bacac70": "d3610e95c66dc3995d797d4a30e0f63e",
".git/objects/eb/1680875cf8dd78bfb8e84d37408b3078571367": "972dc2ae8bebd29c6173a42c13690f4f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/0c/2b686e512015e7a9e4ff650cccf0dfddce485c": "62e226e5bad886664ce9ae4e07dd0443",
".git/objects/58/b74dcb1237eb3d61849bfd629fc083a4f746e7": "9f851ba657734027e7c7a11254b89a53",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "6701b5da99108232078ee7128a21dc9a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "2330aa857d1f9d62e630bedcdaafc8e7",
".git/objects/6b/160379f202d3aca50a5dad37a81fdb8711c917": "54979430d2b5eb96ea63c7a13ad86759",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/49/b32839161bea28aa05fcf7101e18eda9cb6eea": "08228c9bafa04fcacda0a7e5ffe5b627",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "a6ecbf0884c14365eb6649eb430445de",
".git/objects/30/1e52b49463da045be2e51b4fcf150858525eba": "63645d1e0bf9b2c9aca749523e905f9f",
".git/objects/05/0fd8e2a37056e00cea3053fa1535f214e467f7": "e03faf39ae7d7b920d6a7ded5630e0cb",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "e1a37984aae0e6ca1b05c16567cf4a25",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "90509821785147424b2f7e22f2a8335c",
".git/objects/0a/65a708b9b03e77d618eb261ce382c86b54bbd2": "78ac433b3a1a19c089dc732e59a3f79e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "3baef4cf4918c37744e678ecbe8b99e1",
".git/objects/7a/e2d9dbca3900927944411a44f4eb66d3921fa0": "2f492a79cf40f183da4922ec74a09f07",
".git/objects/8a/d0c4090c48521582b8a198993f67fd28442f5f": "894f082a6faa4a645222004cc90493de",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "d42d471a0f31b2a767111531d3729ad3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "434c5ca57fec891cb8c180dec7e4a378",
".git/objects/91/74624a53e9c99283f4c7fe1adb74f9ca09099f": "1852165d1e5084096b5cd3249587a402",
".git/objects/47/3879452fbb6ceb805a6c41674618cb63e94faa": "a4410e9113a7e7d574b0125b73b6f544",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "0d221ba0f4a46b5bb7bed7435c78c928",
".git/objects/73/bf55f89c9bbdac887000660597b6860f4386da": "f36f5ebc21dbb39191fdd6b655d239db",
".git/objects/41/f34b131568b3883aefbbe24a034cd759dead73": "e76ccae54b492ccd8a5881b44f396b7d",
".git/objects/41/3b6ab89acc54c180e6f9727aa5261c26d39ca7": "d3d5c63bc3c8e939abf085ec89fa49ea",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "83993c04f2d3d24d3713787783eefe4f",
".git/objects/3d/cc8e2849315d8f0125f5d770ca6b6607e56576": "1bb5efd3ef7beb4d00797fe9b676cdcd",
".git/objects/c1/c02b182ee8099db8d534288c3779c83773c204": "84623fc9020e6c9c545bed5475a67d1d",
".git/objects/e3/5f0745a3b1865adc05f93695d58fb5d8a67159": "bb35565c1a2babf145d59b16d157838c",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/db/b2c54da7116360f291c85a57abcff9e06f580b": "e461e67fe58c74d0931ebaf466c8b1a0",
".git/objects/8b/0012384629fe41a9342aed886066cab6ea432e": "07d8e4f47fe883320cb61ba1854d00ee",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "d05cff6db247a2b4e4698e1c29e20559",
".git/objects/1d/4d40d6c7c891ecb0f4e87d1f57071cc49f57bf": "01454b8f8d8b2afe91d90c292ec6a409",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/df/b34ffc71e1a7bd0764ca71839c5939fc6ea6d8": "9fe121e17d8391dd1fee2eb4417c7c1a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/08/32804ef0a36134f8db5218838a8200862e848c": "3cec7d7d7351caae7e4519edd2e0f18b",
".git/config": "2faae905dc2f708435d36a2e4ae96a75",
".git/refs/remotes/origin/main": "baf09037446c5571ac9ad1c524c9653a",
".git/refs/heads/main": "baf09037446c5571ac9ad1c524c9653a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "0264a7fada3f73bb2dcea8a65219ac71",
"version.json": "18d2187fd9f4e70893e1126514d2e4be",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "9be12298f4f1950cb973f8a1f7c3b9dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ff4c85f272b86d8763c9da921a8a425c",
"assets/fonts/MaterialIcons-Regular.otf": "40bd6287ae155e0bd60ebf9d44d7487e",
"assets/NOTICES": "d0530dac635576be0260cc30b789873b",
"assets/AssetManifest.bin": "5390c2b71828a80ebaa08d9fff7bc9ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "6b186cca2b2564500354ec23111fb250",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/google-logo.png": "4c55b8d3625b8dfadd7eeb618a7137e0",
"assets/assets/images/profile.jpg": "206cf948576bed625ec97310061a6de3",
"assets/assets/images/profile-white.jpg": "16bdfd984d2b1e4dca93441520025d8d",
"assets/assets/images/qris.jpg": "39ffdec099d78f47f41766e8c49f2040",
"assets/assets/images/doctor.png": "f5f9a1593aa0def60f602baff945cbe6",
"assets/assets/images/doc_icon.png": "b3cdb5414c05d164a0aa92296c70369b",
"assets/assets/images/medicine_promo.png": "eb93f2a5191a92a6a5d228afd085b312",
"assets/assets/images/upload_prescription.png": "d84b8241c28677d5ae7e615e14c93929",
"assets/assets/images/health_articles.png": "144ede0fdf57558bfbd05978084ba65d",
"assets/assets/images/doctor_illustr.png": "1c02d60489eab31fe681c4d7be17b08a",
"assets/assets/images/doctor_consult.png": "512d6d61d5dc51ad4034c914439079e4",
"assets/assets/icon/logo.png": "d08ea6972c24031f758aa571d6bbc228",
"assets/assets/icon/app_icon.png": "a3d934c38d0367cdcf2080a815a85bff",
"assets/AssetManifest.bin.json": "cc8a7eb103673e598dd0adeac3701a92",
"flutter_bootstrap.js": "eee343097e9f03e8aaba020f911df496",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"main.dart.js": "6c92fe5d06bda8eb729f18b02355e113"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
