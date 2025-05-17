'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55028cf07f6aadeafda9d97f88b868f6",
".git/config": "3ab5af9e1f1795fb1a222992024430ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c4e951b25e10f07a0efc1070bbada83a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98e2225d745942cab0cf0352067b091d",
".git/logs/refs/heads/main": "98e2225d745942cab0cf0352067b091d",
".git/logs/refs/remotes/origin/main": "4723bc4566a6f3f51df840a5b98556b9",
".git/objects/02/64684a9f38ab799a2f8a71d0d753696f4cbb0a": "c593a2886c0627f2e11540c52929ae9d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/7e812df9b942e2fabdc884f60ecb88ade82511": "61f612a2a49edadf5abfa4ff94442f3a",
".git/objects/0c/2b686e512015e7a9e4ff650cccf0dfddce485c": "432ceecbe3249315ac161dd91b974ae8",
".git/objects/0d/b8760357174a842642737ca57f3dd7b66620a3": "bd40465e66b9e0069f55c7025b7c80e2",
".git/objects/1d/4d40d6c7c891ecb0f4e87d1f57071cc49f57bf": "ca768465ca08331666da4f5fb71021c6",
".git/objects/1e/a0a91febd9c8f5c79af569fe036cfa01ad7393": "f98a959150a544e9d7b81c34e2ee66fa",
".git/objects/26/d5a8c864904cd4591b98d4f30ecdfc4560cbcb": "30006d8d02e6bedc2dd16685e57afcdb",
".git/objects/27/86161fa933d9d36545d5536e1d63a02fb6de84": "8ffbb4a555bf33e92b36502fa0c6885b",
".git/objects/2a/38d72fbcb2cdbf5fbfe3a4eb75cbc0f4d0d5d3": "feecfd0389d6933150afde9669a23ede",
".git/objects/31/f58f7cb0f6fcf2a1f2d95e3ce1883f4a86a203": "cb62edce4aba1f43e71359d96b99494d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/3b6ab89acc54c180e6f9727aa5261c26d39ca7": "4c6d51000f2fe9a0376c320bed977542",
".git/objects/41/f34b131568b3883aefbbe24a034cd759dead73": "b114836ad208d43b5234a2c034f74df0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3879452fbb6ceb805a6c41674618cb63e94faa": "7ee85d7581466f3c41ce0323e47a130d",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/8c55f000094c24d2643a2b76da708d9358c8ef": "26e62000e10549b7d55ffa9e0ec52f4e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/c4be25e22602445d89c431ce0bfef5b992c1fc": "85d1e845a718c9fdcc54f4eacdb0dcbd",
".git/objects/6b/160379f202d3aca50a5dad37a81fdb8711c917": "6656f057eca418ebcbd72d73991880b0",
".git/objects/71/ca718fc84e00443070c4b95966ae9672751df1": "fa273d86daf69d5c3b04d57986209c7b",
".git/objects/73/bf55f89c9bbdac887000660597b6860f4386da": "4eb284c9f9379f61870b93276369c3ca",
".git/objects/82/2bee351c6237bef9e79d8be38e4abf5ceec57c": "c79d18c26e5117cfaed8c9995359e646",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d0c4090c48521582b8a198993f67fd28442f5f": "4e368dad0e53b0e0ab3e353d3163873f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/97/150a874523b6aa03e106cdfa9678727ee6c9f7": "36a61643ffb1c5ff9b6b0285747606c3",
".git/objects/9d/d30318dab7ceef47aa0f0aaef5eda86aa5b967": "53038ed29ee8e18ef9188026648ca7f8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/b88dfeb12251dc64fdfb136da8286de925028d": "fccdeb4ddeaa903dcb787219fdbbdf52",
".git/objects/c3/9150b7bede56ef2c115ad643fbb9317e9756ed": "bf2ed0f538dbec277b80fd5fec31f3ee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/08e898ab16fb042d6de6b5e369efa7ae5ec9d0": "ac09d699e7b1119aa33527d08724e7f7",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/9d357ab708e3b607a8f3fbfed9bbb26c977a95": "b1ccec2252166358713b6821d1353dab",
".git/objects/e3/5f0745a3b1865adc05f93695d58fb5d8a67159": "35b616c84d360c2adf8a7db7c2b6a941",
".git/objects/e8/14ad4b9a9baaa321538ffbf4db69f69d2195bd": "3bff444125041fc666f33d969624128b",
".git/objects/e8/5fcec19705b2a160a2f7ffb56dcea051ad40de": "746b22f79c818ecec0a68573af513b0c",
".git/objects/eb/1680875cf8dd78bfb8e84d37408b3078571367": "28e92e610051212f55c5fde42259cb3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6c56f0d42f4e6dba0c56c70c7e0be729a9e9ca": "178be8abcc3a15af187cf93e310ec66a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/f8f11c7832ca14f49eb3938583fffbd6a292cf": "ef4bb1644ff6bc1533fa7e334ed00ae1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/e92002ce70fa52cedf4d75caae7b2013ee2a3d": "be5ec1b74f6ea4683f3ed9ba86701b2c",
".git/refs/heads/main": "93e632243601ccd69d661b5cf550cd4c",
".git/refs/remotes/origin/main": "93e632243601ccd69d661b5cf550cd4c",
".git/refs/tags/v1.1.4": "8e76f7646f477350709c5b94ee270b6c",
"assets/AssetManifest.bin": "6a55d2d14b0fecbbb8e2237f8ed9a6c3",
"assets/AssetManifest.bin.json": "4d81913139063b325e95cc48f1ced8ff",
"assets/AssetManifest.json": "984c64ad17740393aa6da9b10b831c22",
"assets/assets/images/doctor.png": "f5f9a1593aa0def60f602baff945cbe6",
"assets/assets/images/doctor_consult.png": "512d6d61d5dc51ad4034c914439079e4",
"assets/assets/images/doctor_illustr.png": "1c02d60489eab31fe681c4d7be17b08a",
"assets/assets/images/doc_icon.png": "b3cdb5414c05d164a0aa92296c70369b",
"assets/assets/images/google-logo.png": "4c55b8d3625b8dfadd7eeb618a7137e0",
"assets/assets/images/health_articles.png": "144ede0fdf57558bfbd05978084ba65d",
"assets/assets/images/medicine_promo.png": "eb93f2a5191a92a6a5d228afd085b312",
"assets/assets/images/profile.jpg": "16bdfd984d2b1e4dca93441520025d8d",
"assets/assets/images/qris.jpg": "39ffdec099d78f47f41766e8c49f2040",
"assets/assets/images/upload_prescription.png": "d84b8241c28677d5ae7e615e14c93929",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "841800ded5d3ec5556510be2d3c39ca4",
"assets/NOTICES": "3a3a08a510fd9fe1e5597ec86bc223a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ff4c85f272b86d8763c9da921a8a425c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0ab4b363613e3f9208f51b1c9333e088",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ffb6b518a72238d2b5c1f7708b364904",
"/": "ffb6b518a72238d2b5c1f7708b364904",
"main.dart.js": "e5c316181ad18ecf7c7f1bef19448e35",
"manifest.json": "28c4dee08d17d560ecf80710c815a2ae",
"version.json": "18d2187fd9f4e70893e1126514d2e4be"};
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
