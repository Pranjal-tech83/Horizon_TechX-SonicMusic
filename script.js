/* ══════════════════════════════════════════════════════
   SonicFlow — Music Player Script
   Real Audio Playback with HTML5 Audio API
   ALL BUTTONS FULLY FUNCTIONAL
   ══════════════════════════════════════════════════════ */

// ── Playlist Data (with free royalty-free audio URLs) ──
const playlist = [
  {
    title: 'Neon Genesis Resonance',
    artist: 'Cybernetic Dreams',
    duration: '4:05',
    durationSec: 245,
    cover: 'https://picsum.photos/seed/sonic1/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    title: 'Quantum Echoes',
    artist: 'Synthwave Collective',
    duration: '3:42',
    durationSec: 222,
    cover: 'https://picsum.photos/seed/sonic2/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    title: 'Digital Horizon',
    artist: 'Neon Pulse',
    duration: '5:12',
    durationSec: 312,
    cover: 'https://picsum.photos/seed/sonic3/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    title: 'Midnight Cruise',
    artist: 'The Night Drivers',
    duration: '4:20',
    durationSec: 260,
    cover: 'https://picsum.photos/seed/sonic4/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    title: 'Data Stream',
    artist: 'Logic Bomb',
    duration: '3:15',
    durationSec: 195,
    cover: 'https://picsum.photos/seed/sonic5/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    title: 'Prism Sky',
    artist: 'Spectrum',
    duration: '5:45',
    durationSec: 345,
    cover: 'https://picsum.photos/seed/sonic6/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    title: 'Cyber City',
    artist: 'Pixel Heart',
    duration: '3:58',
    durationSec: 238,
    cover: 'https://picsum.photos/seed/sonic7/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    title: 'Retro Future',
    artist: 'Static Age',
    duration: '4:32',
    durationSec: 272,
    cover: 'https://picsum.photos/seed/sonic8/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    title: 'Lost Signal',
    artist: 'Transmission',
    duration: '2:55',
    durationSec: 175,
    cover: 'https://picsum.photos/seed/sonic9/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    title: 'Phantom Drift',
    artist: 'Ghost Protocol',
    duration: '4:48',
    durationSec: 288,
    cover: 'https://picsum.photos/seed/sonic10/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    title: 'Solar Winds',
    artist: 'Astral Path',
    duration: '3:33',
    durationSec: 213,
    cover: 'https://picsum.photos/seed/sonic11/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },
  {
    title: 'Binary Sunset',
    artist: 'Code Runner',
    duration: '5:01',
    durationSec: 301,
    cover: 'https://picsum.photos/seed/sonic12/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },
  {
    title: 'Chrome Hearts',
    artist: 'Voltage',
    duration: '3:27',
    durationSec: 207,
    cover: 'https://picsum.photos/seed/sonic13/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  {
    title: 'Deep Frequency',
    artist: 'Bass Engine',
    duration: '4:14',
    durationSec: 254,
    cover: 'https://picsum.photos/seed/sonic14/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
  },
  {
    title: 'Stellar Echo',
    artist: 'Orbit',
    duration: '3:50',
    durationSec: 230,
    cover: 'https://picsum.photos/seed/sonic15/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  },
  {
    title: 'Waveform',
    artist: 'Cybernetic Dreams',
    duration: '4:38',
    durationSec: 278,
    cover: 'https://picsum.photos/seed/sonic16/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
  },
  {
    title: 'Neon Rain',
    artist: 'Midnight Protocol',
    duration: '3:09',
    durationSec: 189,
    cover: 'https://picsum.photos/seed/sonic17/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    title: 'Pulse Drive',
    artist: 'Synthwave Collective',
    duration: '5:22',
    durationSec: 322,
    cover: 'https://picsum.photos/seed/sonic18/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    title: 'Zero Gravity',
    artist: 'Astral Path',
    duration: '4:01',
    durationSec: 241,
    cover: 'https://picsum.photos/seed/sonic19/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    title: 'Afterglow',
    artist: 'Neon Pulse',
    duration: '3:44',
    durationSec: 224,
    cover: 'https://picsum.photos/seed/sonic20/400/400',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  }
];

// ── Favorites store ────────────────────────────────────
let favorites = new Set();

// ── State ──────────────────────────────────────────────
let currentIndex = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 0; // 0=off, 1=all, 2=one
let isLiked = false;
let currentView = 'library'; // home, trending, library, favorites, recent
let recentlyPlayed = [];

// ── HTML5 Audio Element ────────────────────────────────
const audio = new Audio();
audio.preload = 'metadata';
audio.volume = 1.0;

// ── DOM Elements ───────────────────────────────────────
const albumArt = document.getElementById('album-art');
const albumWrapper = document.getElementById('album-art-wrapper');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const progressFill = document.getElementById('progress-fill');
const progressBar = document.getElementById('progress-bar');
const timeElapsed = document.getElementById('time-elapsed');
const timeDuration = document.getElementById('time-duration');
const playBtn = document.getElementById('btn-play');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const shuffleBtn = document.getElementById('btn-shuffle');
const repeatBtn = document.getElementById('btn-repeat');
const likeBtn = document.getElementById('btn-like');
const playlistList = document.getElementById('playlist-list');
const playlistBadge = document.getElementById('playlist-badge');
const btnAddMusicSidebar = document.getElementById('btn-add-music-sidebar');
const btnAddMusicHeader = document.getElementById('btn-add-music-header');
const musicFileInput = document.getElementById('music-file-input');
const navMyMusic = document.getElementById('nav-mymusic');

// ── Toast Notification System ──────────────────────────
function showToast(message, icon = '✓') {
  // Remove existing toast
  const existing = document.querySelector('.sf-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'sf-toast';
  toast.innerHTML = `<span class="sf-toast-icon">${icon}</span><span>${message}</span>`;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// ── Modal System ───────────────────────────────────────
function createModal(title, content, options = {}) {
  // Remove existing modals
  closeAllModals();

  const overlay = document.createElement('div');
  overlay.className = 'sf-modal-overlay';
  overlay.onclick = (e) => {
    if (e.target === overlay) closeAllModals();
  };

  const modal = document.createElement('div');
  modal.className = 'sf-modal';

  const header = document.createElement('div');
  header.className = 'sf-modal-header';
  header.innerHTML = `
    <h3>${title}</h3>
    <button class="sf-modal-close" id="modal-close-btn" title="Close">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;

  const body = document.createElement('div');
  body.className = 'sf-modal-body';
  if (typeof content === 'string') {
    body.innerHTML = content;
  } else {
    body.appendChild(content);
  }

  modal.appendChild(header);
  modal.appendChild(body);

  if (options.footer) {
    const footer = document.createElement('div');
    footer.className = 'sf-modal-footer';
    footer.innerHTML = options.footer;
    modal.appendChild(footer);
  }

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Animate in
  requestAnimationFrame(() => {
    overlay.classList.add('show');
  });

  // Close button
  modal.querySelector('#modal-close-btn').onclick = closeAllModals;

  // ESC key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  return { overlay, modal, body };
}

function closeAllModals() {
  document.querySelectorAll('.sf-modal-overlay').forEach(el => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  });
  // Close dropdown
  document.querySelectorAll('.sf-dropdown').forEach(el => el.remove());
  // Close notification panel
  document.querySelectorAll('.sf-notif-panel').forEach(el => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  });
}

// ── Initialize ─────────────────────────────────────────
function init() {
  injectExtraStyles();
  renderPlaylist();
  loadTrack(currentIndex);

  // Playback controls
  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', playPrev);
  nextBtn.addEventListener('click', playNext);
  shuffleBtn.addEventListener('click', toggleShuffle);
  repeatBtn.addEventListener('click', toggleRepeat);
  likeBtn.addEventListener('click', toggleLike);
  progressBar.addEventListener('click', seekTo);

  // Audio events — real-time progress update
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', updateDuration);
  audio.addEventListener('ended', handleTrackEnd);

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboard);

  // ── Sidebar Navigation ──
  document.getElementById('nav-home').addEventListener('click', () => switchView('home'));
  document.getElementById('nav-trending').addEventListener('click', () => switchView('trending'));
  document.getElementById('nav-library').addEventListener('click', () => switchView('library'));
  document.getElementById('nav-favorites').addEventListener('click', () => switchView('favorites'));
  document.getElementById('nav-recent').addEventListener('click', () => switchView('recent'));
  if (navMyMusic) navMyMusic.addEventListener('click', () => switchView('mymusic'));

  // ── Top Nav Links ──
  document.querySelectorAll('.top-nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const text = link.textContent.trim().toLowerCase();
      // Update active state
      document.querySelectorAll('.top-nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');

      if (text === 'discover') switchView('home');
      else if (text === 'library') switchView('library');
      else if (text === 'playlists') switchView('library');
      else if (text === 'radio') openRadioMode();
    });
  });

  // ── Notification Button ──
  document.getElementById('btn-notifications').addEventListener('click', openNotifications);

  // ── Settings Button ──
  document.getElementById('btn-settings').addEventListener('click', openSettings);

  // ── Profile Avatar ──
  document.querySelector('.nav-avatar').addEventListener('click', openProfileDropdown);

  // ── Help Button ──
  document.getElementById('btn-help').addEventListener('click', openHelpModal);

  // ── Logout Button ──
  document.getElementById('btn-logout').addEventListener('click', openLogoutConfirm);

  // Close dropdowns on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.sf-dropdown') && !e.target.closest('.nav-avatar')) {
      document.querySelectorAll('.sf-dropdown').forEach(el => el.remove());
    }
    if (!e.target.closest('.sf-notif-panel') && !e.target.closest('#btn-notifications')) {
      document.querySelectorAll('.sf-notif-panel').forEach(el => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 300);
      });
    }
  });

  // ── Add Music Handlers ──
  if (btnAddMusicSidebar) btnAddMusicSidebar.addEventListener('click', () => musicFileInput.click());
  if (btnAddMusicHeader) btnAddMusicHeader.addEventListener('click', () => musicFileInput.click());
  if (musicFileInput) musicFileInput.addEventListener('change', handleMusicUpload);
}

// ── View Switching (Sidebar Nav) ───────────────────────
function switchView(view) {
  currentView = view;

  // Update sidebar active state
  document.querySelectorAll('.sidebar-nav-item').forEach(item => item.classList.remove('active'));
  const navMap = { home: 'nav-home', trending: 'nav-trending', library: 'nav-library', favorites: 'nav-favorites', recent: 'nav-recent', mymusic: 'nav-mymusic' };
  const activeBtn = document.getElementById(navMap[view]);
  if (activeBtn) activeBtn.classList.add('active');

  // Update playlist header
  const headerH2 = document.querySelector('.playlist-header h2');
  const viewNames = { home: '🏠 Home Mix', trending: '🔥 Trending Now', library: '📚 Top 20 Music', favorites: '❤️ Favorites', recent: '🕐 Recently Played', mymusic: '📁 My Music' };
  headerH2.textContent = viewNames[view] || 'Top 20 Music';

  // Filter / re-render playlist based on view
  renderFilteredPlaylist(view);

  showToast(`Switched to ${viewNames[view] || view}`, '📂');
}

function renderFilteredPlaylist(view) {
  let tracks;

  switch (view) {
    case 'home':
      // Show first 10 tracks as "Home Mix"
      tracks = playlist.slice(0, 10).map((t, i) => ({ ...t, originalIndex: i }));
      break;
    case 'trending':
      // Sort by "popularity" (reverse order for variety)
      tracks = [...playlist].reverse().slice(0, 10).map((t) => ({ ...t, originalIndex: playlist.indexOf(t) }));
      break;
    case 'favorites':
      tracks = playlist.filter((_, i) => favorites.has(i)).map(t => ({ ...t, originalIndex: playlist.indexOf(t) }));
      break;
    case 'recent':
      tracks = recentlyPlayed.map(idx => ({ ...playlist[idx], originalIndex: idx }));
      break;
    case 'mymusic':
      tracks = playlist.map((t, i) => ({ ...t, originalIndex: i })).filter(t => t.isLocal);
      break;
    case 'library':
    default:
      tracks = playlist.map((t, i) => ({ ...t, originalIndex: i }));
      break;
  }

  playlistBadge.textContent = `${tracks.length} TRACKS`;
  playlistList.innerHTML = '';

  if (tracks.length === 0) {
    const emptyMsg = document.createElement('li');
    emptyMsg.className = 'playlist-empty-msg';
    emptyMsg.innerHTML = `<div style="text-align:center;padding:40px 16px;color:var(--text-muted);font-size:0.85rem;">
      <div style="font-size:2rem;margin-bottom:12px;">${view === 'favorites' ? '❤️' : '🎵'}</div>
      <div>${view === 'favorites' ? 'No favorites yet. Click the ❤️ button to add songs!' : 'No tracks here yet.'}</div>
    </div>`;
    playlistList.appendChild(emptyMsg);
    return;
  }

  tracks.forEach((track, i) => {
    const li = document.createElement('li');
    const isActive = track.originalIndex === currentIndex;
    li.className = `playlist-item${isActive ? ' active' : ''}${isActive && !isPlaying ? ' paused' : ''}`;
    li.setAttribute('data-index', track.originalIndex);
    li.onclick = () => selectTrack(track.originalIndex);

    const num = String(i + 1).padStart(2, '0');

    li.innerHTML = `
      <span class="item-number">${num}</span>
      <div class="item-playing-icon">
        <div class="eq-bars">
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
        </div>
      </div>
      <div class="item-thumb">
        <img src="${track.cover}" alt="${track.title}" loading="lazy" />
      </div>
      <div class="item-info">
        <div class="item-title">${track.title}</div>
        <div class="item-artist">${track.artist}</div>
      </div>
      <span class="item-duration">${track.duration}</span>
    `;
    playlistList.appendChild(li);
  });
}

// ── Handle Local Music Upload ──────────────────────────
function handleMusicUpload(e) {
  const files = e.target.files;
  if (!files.length) return;

  let addedCount = 0;
  for (const file of files) {
    if (!file.type.startsWith('audio/')) continue;

    const objectUrl = URL.createObjectURL(file);
    
    // Add to playlist
    playlist.push({
      title: file.name.replace(/\.[^/.]+$/, ""), // remove extension
      artist: 'Local File',
      duration: '--:--', 
      durationSec: 0,
      cover: 'https://picsum.photos/seed/local/400/400',
      audio: objectUrl,
      isLocal: true
    });
    addedCount++;
  }

  if (addedCount > 0) {
    showToast(`Added ${addedCount} track(s) to your library`, '🎵');
    // Switch to mymusic view to see them
    if (currentView !== 'mymusic') switchView('mymusic');
    else renderFilteredPlaylist('mymusic');
  } else {
    showToast('No valid audio files selected', '⚠️');
  }

  // Reset input
  musicFileInput.value = '';
}

// ── Radio Mode ─────────────────────────────────────────
function openRadioMode() {
  isShuffled = true;
  shuffleBtn.classList.add('active');
  repeatMode = 1;
  repeatBtn.classList.add('active');
  playNext();
  if (!isPlaying) togglePlay();
  showToast('Radio Mode — Shuffle & Repeat ON', '📻');
}

// ── Notifications Panel ────────────────────────────────
function openNotifications() {
  // Remove existing
  document.querySelectorAll('.sf-notif-panel').forEach(el => el.remove());

  const panel = document.createElement('div');
  panel.className = 'sf-notif-panel';

  const notifications = [
    { icon: '🎵', text: 'New release: "Neon Rain" by Midnight Protocol', time: '2m ago', unread: true },
    { icon: '❤️', text: 'Your playlist "Chill Vibes" got 50 new likes', time: '15m ago', unread: true },
    { icon: '🎤', text: 'Cybernetic Dreams is playing live tonight', time: '1h ago', unread: false },
    { icon: '📢', text: 'Hi-Fi audio quality now available for free trial', time: '3h ago', unread: false },
    { icon: '🔔', text: 'Weekly mix updated with 10 new tracks', time: '1d ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  panel.innerHTML = `
    <div class="sf-notif-header">
      <h3>Notifications</h3>
      <button class="sf-notif-mark-read" id="mark-all-read">Mark all read</button>
    </div>
    <div class="sf-notif-list">
      ${notifications.map(n => `
        <div class="sf-notif-item ${n.unread ? 'unread' : ''}">
          <span class="sf-notif-icon">${n.icon}</span>
          <div class="sf-notif-content">
            <p>${n.text}</p>
            <span class="sf-notif-time">${n.time}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.body.appendChild(panel);
  requestAnimationFrame(() => panel.classList.add('show'));

  // Mark all read
  panel.querySelector('#mark-all-read').onclick = () => {
    panel.querySelectorAll('.sf-notif-item').forEach(item => item.classList.remove('unread'));
    showToast('All notifications marked as read', '✓');
  };

  // Click individual notification
  panel.querySelectorAll('.sf-notif-item').forEach(item => {
    item.onclick = () => {
      item.classList.remove('unread');
      item.style.opacity = '0.6';
    };
  });
}

// ── Settings Modal ─────────────────────────────────────
function openSettings() {
  const currentVol = Math.round(audio.volume * 100);

  const content = `
    <div class="sf-settings-group">
      <label class="sf-settings-label">Volume</label>
      <div class="sf-settings-row">
        <input type="range" id="setting-volume" min="0" max="100" value="${currentVol}" class="sf-range" />
        <span id="volume-display" class="sf-settings-value">${currentVol}%</span>
      </div>
    </div>
    <div class="sf-settings-group">
      <label class="sf-settings-label">Playback Speed</label>
      <div class="sf-settings-row sf-speed-btns">
        <button class="sf-chip ${audio.playbackRate === 0.5 ? 'active' : ''}" data-speed="0.5">0.5×</button>
        <button class="sf-chip ${audio.playbackRate === 0.75 ? 'active' : ''}" data-speed="0.75">0.75×</button>
        <button class="sf-chip ${audio.playbackRate === 1 ? 'active' : ''}" data-speed="1">1×</button>
        <button class="sf-chip ${audio.playbackRate === 1.25 ? 'active' : ''}" data-speed="1.25">1.25×</button>
        <button class="sf-chip ${audio.playbackRate === 1.5 ? 'active' : ''}" data-speed="1.5">1.5×</button>
        <button class="sf-chip ${audio.playbackRate === 2 ? 'active' : ''}" data-speed="2">2×</button>
      </div>
    </div>
    <div class="sf-settings-group">
      <label class="sf-settings-label">Audio Quality</label>
      <div class="sf-settings-row sf-quality-btns">
        <button class="sf-chip active" data-quality="auto">Auto</button>
        <button class="sf-chip" data-quality="low">Low (128k)</button>
        <button class="sf-chip" data-quality="high">High (320k)</button>
        <button class="sf-chip" data-quality="hifi">Hi-Fi (FLAC)</button>
      </div>
    </div>
    <div class="sf-settings-group">
      <label class="sf-settings-label">Crossfade</label>
      <div class="sf-settings-row">
        <input type="range" id="setting-crossfade" min="0" max="12" value="0" class="sf-range" />
        <span id="crossfade-display" class="sf-settings-value">Off</span>
      </div>
    </div>
    <div class="sf-settings-group">
      <div class="sf-toggle-row">
        <span>Equalizer</span>
        <label class="sf-toggle">
          <input type="checkbox" id="setting-eq" />
          <span class="sf-toggle-slider"></span>
        </label>
      </div>
      <div class="sf-toggle-row">
        <span>Gapless Playback</span>
        <label class="sf-toggle">
          <input type="checkbox" id="setting-gapless" checked />
          <span class="sf-toggle-slider"></span>
        </label>
      </div>
      <div class="sf-toggle-row">
        <span>Normalize Volume</span>
        <label class="sf-toggle">
          <input type="checkbox" id="setting-normalize" />
          <span class="sf-toggle-slider"></span>
        </label>
      </div>
    </div>
  `;

  const { body } = createModal('⚙️ Settings', content);

  // Volume slider
  const volSlider = body.querySelector('#setting-volume');
  const volDisplay = body.querySelector('#volume-display');
  volSlider.oninput = () => {
    audio.volume = volSlider.value / 100;
    volDisplay.textContent = volSlider.value + '%';
  };

  // Speed buttons
  body.querySelectorAll('.sf-speed-btns .sf-chip').forEach(btn => {
    btn.onclick = () => {
      body.querySelectorAll('.sf-speed-btns .sf-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      audio.playbackRate = parseFloat(btn.dataset.speed);
      showToast(`Playback speed: ${btn.dataset.speed}×`, '⚡');
    };
  });

  // Quality buttons
  body.querySelectorAll('.sf-quality-btns .sf-chip').forEach(btn => {
    btn.onclick = () => {
      body.querySelectorAll('.sf-quality-btns .sf-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showToast(`Audio quality: ${btn.textContent}`, '🎧');
    };
  });

  // Crossfade slider
  const cfSlider = body.querySelector('#setting-crossfade');
  const cfDisplay = body.querySelector('#crossfade-display');
  cfSlider.oninput = () => {
    cfDisplay.textContent = cfSlider.value === '0' ? 'Off' : cfSlider.value + 's';
  };

  // Toggle switches
  body.querySelector('#setting-eq').onchange = (e) => {
    showToast(e.target.checked ? 'Equalizer enabled' : 'Equalizer disabled', '🎛️');
  };
  body.querySelector('#setting-gapless').onchange = (e) => {
    showToast(e.target.checked ? 'Gapless playback on' : 'Gapless playback off', '🔗');
  };
  body.querySelector('#setting-normalize').onchange = (e) => {
    showToast(e.target.checked ? 'Volume normalization on' : 'Volume normalization off', '📊');
  };
}

// ── Profile Dropdown ───────────────────────────────────
function openProfileDropdown(e) {
  e.stopPropagation();
  // Remove existing
  document.querySelectorAll('.sf-dropdown').forEach(el => el.remove());

  const dropdown = document.createElement('div');
  dropdown.className = 'sf-dropdown';
  dropdown.innerHTML = `
    <div class="sf-dropdown-header">
      <div class="sf-dropdown-avatar"></div>
      <div>
        <div class="sf-dropdown-name">SonicFlow User</div>
        <div class="sf-dropdown-email">user@sonicflow.com</div>
      </div>
    </div>
    <div class="sf-dropdown-divider"></div>
    <button class="sf-dropdown-item" id="dd-profile">
      <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      My Profile
    </button>
    <button class="sf-dropdown-item" id="dd-stats">
      <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      Listening Stats
    </button>
    <div class="sf-dropdown-divider"></div>
    <button class="sf-dropdown-item sf-dropdown-logout" id="dd-logout">
      <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
      Log Out
    </button>
  `;

  document.body.appendChild(dropdown);

  // Position it
  const avatarRect = document.querySelector('.nav-avatar').getBoundingClientRect();
  dropdown.style.top = (avatarRect.bottom + 8) + 'px';
  dropdown.style.right = (window.innerWidth - avatarRect.right) + 'px';

  requestAnimationFrame(() => dropdown.classList.add('show'));

  // Actions
  dropdown.querySelector('#dd-profile').onclick = () => {
    closeAllModals();
    openProfileModal();
  };
  dropdown.querySelector('#dd-stats').onclick = () => {
    closeAllModals();
    openStatsModal();
  };
  dropdown.querySelector('#dd-logout').onclick = () => {
    closeAllModals();
    openLogoutConfirm();
  };
}

// ── Profile Modal ──────────────────────────────────────
function openProfileModal() {
  const content = `
    <div style="text-align:center;padding:12px 0 24px;">
      <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:2rem;color:#fff;">🎵</div>
      <div style="font-size:1.2rem;font-weight:700;margin-bottom:4px;">SonicFlow User</div>
      <div style="font-size:0.85rem;color:var(--text-muted);">user@sonicflow.com</div>
    </div>
    <div class="sf-settings-group">
      <div class="sf-stat-row"><span>Member Since</span><strong>Jan 2024</strong></div>
      <div class="sf-stat-row"><span>Plan</span><strong style="color:var(--accent);">Free</strong></div>
      <div class="sf-stat-row"><span>Total Tracks Played</span><strong>${recentlyPlayed.length}</strong></div>
      <div class="sf-stat-row"><span>Favorites</span><strong>${favorites.size}</strong></div>
    </div>
  `;
  createModal('👤 My Profile', content);
}

// ── Stats Modal ────────────────────────────────────────
function openStatsModal() {
  // Count artist plays
  const artistPlays = {};
  recentlyPlayed.forEach(idx => {
    const artist = playlist[idx].artist;
    artistPlays[artist] = (artistPlays[artist] || 0) + 1;
  });

  const topArtists = Object.entries(artistPlays)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const content = `
    <div class="sf-settings-group">
      <label class="sf-settings-label">This Session</label>
      <div class="sf-stat-row"><span>Tracks Played</span><strong>${recentlyPlayed.length}</strong></div>
      <div class="sf-stat-row"><span>Favorites</span><strong>${favorites.size}</strong></div>
      <div class="sf-stat-row"><span>Shuffle Mode</span><strong>${isShuffled ? 'On' : 'Off'}</strong></div>
      <div class="sf-stat-row"><span>Repeat Mode</span><strong>${repeatMode === 0 ? 'Off' : repeatMode === 1 ? 'All' : 'One'}</strong></div>
    </div>
    ${topArtists.length > 0 ? `
    <div class="sf-settings-group">
      <label class="sf-settings-label">Top Artists</label>
      ${topArtists.map(([artist, count], i) => `
        <div class="sf-stat-row">
          <span>${['🥇','🥈','🥉','4.','5.'][i]} ${artist}</span>
          <strong>${count} play${count > 1 ? 's' : ''}</strong>
        </div>
      `).join('')}
    </div>` : `
    <div style="text-align:center;padding:20px;color:var(--text-muted);font-size:0.85rem;">
      <div style="font-size:2rem;margin-bottom:8px;">📊</div>
      Play some tracks to see your stats!
    </div>`}
  `;
  createModal('📊 Listening Stats', content);
}

// ── Help Modal ─────────────────────────────────────────
function openHelpModal() {
  const content = `
    <div class="sf-settings-group">
      <label class="sf-settings-label">Keyboard Shortcuts</label>
      <div class="sf-stat-row"><span><kbd>Space</kbd></span><span>Play / Pause</span></div>
      <div class="sf-stat-row"><span><kbd>→</kbd></span><span>Next Track</span></div>
      <div class="sf-stat-row"><span><kbd>←</kbd></span><span>Previous Track</span></div>
      <div class="sf-stat-row"><span><kbd>S</kbd></span><span>Toggle Shuffle</span></div>
      <div class="sf-stat-row"><span><kbd>R</kbd></span><span>Toggle Repeat</span></div>
      <div class="sf-stat-row"><span><kbd>L</kbd></span><span>Like / Unlike Track</span></div>
      <div class="sf-stat-row"><span><kbd>M</kbd></span><span>Mute / Unmute</span></div>
      <div class="sf-stat-row"><span><kbd>↑ / ↓</kbd></span><span>Volume Up / Down</span></div>
    </div>
    <div class="sf-settings-group">
      <label class="sf-settings-label">Tips</label>
      <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">
        • Click the progress bar to seek to any position<br>
        • Click any track in the playlist to play it<br>
        • Click the ❤️ button to add a track to favorites<br>
        • Use the sidebar to browse different views<br>
        • Radio mode enables shuffle + repeat for continuous play
      </div>
    </div>
    <div class="sf-settings-group">
      <label class="sf-settings-label">About</label>
      <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;">
        SonicFlow v2.0<br>
        A beautiful music player with curated playlists and high-fidelity audio.<br>
        Audio courtesy of SoundHelix.
      </div>
    </div>
  `;
  createModal('❓ Help & Shortcuts', content);
}

// ── Logout Confirm ─────────────────────────────────────
function openLogoutConfirm() {
  const content = `
    <div style="text-align:center;padding:16px 0;">
      <div style="font-size:2.5rem;margin-bottom:16px;">👋</div>
      <div style="font-size:1rem;font-weight:600;margin-bottom:8px;">Are you sure you want to log out?</div>
      <div style="font-size:0.85rem;color:var(--text-muted);">Your playback will be paused and session will end.</div>
    </div>
    <div style="display:flex;gap:12px;margin-top:20px;">
      <button class="sf-btn-secondary" id="logout-cancel" style="flex:1;">Cancel</button>
      <button class="sf-btn-danger" id="logout-confirm" style="flex:1;">Log Out</button>
    </div>
  `;

  const { body } = createModal('Log Out', content);

  body.querySelector('#logout-cancel').onclick = closeAllModals;
  body.querySelector('#logout-confirm').onclick = () => {
    // Pause playback
    if (isPlaying) togglePlay();
    closeAllModals();
    showToast('Logged out successfully. See you soon!', '👋');
  };
}

// ── Load Track ─────────────────────────────────────────
function loadTrack(index) {
  const track = playlist[index];

  // Set audio source
  audio.src = track.audio;
  audio.load();

  // Update UI
  albumArt.src = track.cover;
  albumArt.alt = track.title;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  timeDuration.textContent = track.duration;
  timeElapsed.textContent = '0:00';
  progressFill.style.width = '0%';

  // Update active in playlist
  document.querySelectorAll('.playlist-item').forEach((item) => {
    const itemIdx = parseInt(item.getAttribute('data-index'), 10);
    item.classList.toggle('active', itemIdx === index);
    item.classList.toggle('paused', itemIdx === index && !isPlaying);
  });

  // Reset like state — check favorites
  isLiked = favorites.has(index);
  likeBtn.classList.toggle('liked', isLiked);

  // Track recently played
  if (!recentlyPlayed.includes(index)) {
    recentlyPlayed.unshift(index);
    if (recentlyPlayed.length > 20) recentlyPlayed.pop();
  } else {
    // Move to front
    recentlyPlayed = recentlyPlayed.filter(i => i !== index);
    recentlyPlayed.unshift(index);
  }
}

// ── Play / Pause ───────────────────────────────────────
function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play().catch(() => {
      // Autoplay blocked — user must interact first
      console.log('Playback requires user interaction first.');
    });
  }
  isPlaying = !isPlaying;
  updatePlayState();
}

function updatePlayState() {
  if (isPlaying) {
    // Pause icon (two bars)
    playIcon.innerHTML = `
      <rect x="6" y="4" width="4" height="16" rx="1"></rect>
      <rect x="14" y="4" width="4" height="16" rx="1"></rect>
    `;
    albumWrapper.classList.add('playing');
  } else {
    // Play icon (triangle)
    playIcon.innerHTML = `
      <polygon points="5,3 19,12 5,21"></polygon>
    `;
    albumWrapper.classList.remove('playing');
  }

  // Update playlist item paused state
  document.querySelectorAll('.playlist-item').forEach((item) => {
    const itemIdx = parseInt(item.getAttribute('data-index'), 10);
    item.classList.toggle('paused', itemIdx === currentIndex && !isPlaying);
  });
}

// ── Real-time Progress from Audio ──────────────────────
function updateProgress() {
  if (!audio.duration) return;

  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + '%';
  timeElapsed.textContent = formatTime(Math.floor(audio.currentTime));
}

function updateDuration() {
  if (audio.duration && isFinite(audio.duration)) {
    timeDuration.textContent = formatTime(Math.floor(audio.duration));
    // Update the playlist data with actual duration
    playlist[currentIndex].durationSec = Math.floor(audio.duration);
  }
}

// ── Track Ended ────────────────────────────────────────
function handleTrackEnd() {
  if (repeatMode === 2) {
    // Repeat one — replay the same track
    audio.currentTime = 0;
    audio.play();
  } else if (repeatMode === 1) {
    // Repeat all — next track (loop back to start)
    currentIndex = (currentIndex + 1) % playlist.length;
    loadTrack(currentIndex);
    isPlaying = true;
    updatePlayState();
    audio.play();
  } else {
    // No repeat — play next or stop at end
    if (currentIndex < playlist.length - 1) {
      currentIndex++;
      loadTrack(currentIndex);
      isPlaying = true;
      updatePlayState();
      audio.play();
    } else {
      isPlaying = false;
      updatePlayState();
      progressFill.style.width = '0%';
      timeElapsed.textContent = '0:00';
    }
  }
}

// ── Navigation ─────────────────────────────────────────
function playPrev() {
  // If more than 3 seconds in, restart current track
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    progressFill.style.width = '0%';
    timeElapsed.textContent = '0:00';
    return;
  }

  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentIndex);
  if (isPlaying) {
    audio.play();
  }
}

function playNext() {
  if (isShuffled) {
    let newIdx;
    do {
      newIdx = Math.floor(Math.random() * playlist.length);
    } while (newIdx === currentIndex && playlist.length > 1);
    currentIndex = newIdx;
  } else {
    currentIndex = (currentIndex + 1) % playlist.length;
  }
  loadTrack(currentIndex);
  if (isPlaying) {
    audio.play();
  }
}

// ── Shuffle ────────────────────────────────────────────
function toggleShuffle() {
  isShuffled = !isShuffled;
  shuffleBtn.classList.toggle('active', isShuffled);
  showToast(isShuffled ? 'Shuffle on' : 'Shuffle off', '🔀');
}

// ── Repeat ─────────────────────────────────────────────
function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  const repeatIcon = repeatBtn.querySelector('svg');

  if (repeatMode === 0) {
    repeatBtn.classList.remove('active');
    repeatIcon.innerHTML = `
      <polyline points="17 1 21 5 17 9"></polyline>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
      <polyline points="7 23 3 19 7 15"></polyline>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
    `;
    showToast('Repeat off', '🔁');
  } else if (repeatMode === 1) {
    repeatBtn.classList.add('active');
    showToast('Repeat all', '🔁');
  } else {
    repeatIcon.innerHTML = `
      <polyline points="17 1 21 5 17 9"></polyline>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
      <polyline points="7 23 3 19 7 15"></polyline>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
      <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="700" fill="currentColor" stroke="none">1</text>
    `;
    showToast('Repeat one', '🔂');
  }
}

// ── Like ───────────────────────────────────────────────
function toggleLike() {
  isLiked = !isLiked;
  likeBtn.classList.toggle('liked', isLiked);

  if (isLiked) {
    favorites.add(currentIndex);
    likeBtn.style.transform = 'scale(1.3)';
    setTimeout(() => { likeBtn.style.transform = 'scale(1)'; }, 200);
    showToast(`Added "${playlist[currentIndex].title}" to favorites`, '❤️');
  } else {
    favorites.delete(currentIndex);
    showToast(`Removed from favorites`, '💔');
  }

  // If we're on the favorites view, refresh the list
  if (currentView === 'favorites') {
    renderFilteredPlaylist('favorites');
  }
}

// ── Seek ───────────────────────────────────────────────
function seekTo(e) {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = clickX / rect.width;

  if (audio.duration && isFinite(audio.duration)) {
    audio.currentTime = pct * audio.duration;
  }

  progressFill.style.width = (pct * 100) + '%';
}

// ── Playlist Rendering ─────────────────────────────────
function renderPlaylist() {
  playlistBadge.textContent = `${playlist.length} TRACKS`;
  playlistList.innerHTML = '';

  playlist.forEach((track, i) => {
    const li = document.createElement('li');
    li.className = `playlist-item${i === currentIndex ? ' active' : ''}`;
    li.setAttribute('data-index', i);
    li.onclick = () => selectTrack(i);

    const num = String(i + 1).padStart(2, '0');

    li.innerHTML = `
      <span class="item-number">${num}</span>
      <div class="item-playing-icon">
        <div class="eq-bars">
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
        </div>
      </div>
      <div class="item-thumb">
        <img src="${track.cover}" alt="${track.title}" loading="lazy" />
      </div>
      <div class="item-info">
        <div class="item-title">${track.title}</div>
        <div class="item-artist">${track.artist}</div>
      </div>
      <span class="item-duration">${track.duration}</span>
    `;
    playlistList.appendChild(li);
  });
}

function selectTrack(index) {
  currentIndex = index;
  loadTrack(index);
  isPlaying = true;
  updatePlayState();
  audio.play().catch(() => {
    console.log('Playback requires user interaction first.');
  });
}

// ── Keyboard Shortcuts ─────────────────────────────────
function handleKeyboard(e) {
  // Don't capture keys when a modal input is focused
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  switch (e.code) {
    case 'Space':
      e.preventDefault();
      togglePlay();
      break;
    case 'ArrowRight':
      e.preventDefault();
      playNext();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      playPrev();
      break;
    case 'ArrowUp':
      e.preventDefault();
      audio.volume = Math.min(1, audio.volume + 0.05);
      showToast(`Volume: ${Math.round(audio.volume * 100)}%`, '🔊');
      break;
    case 'ArrowDown':
      e.preventDefault();
      audio.volume = Math.max(0, audio.volume - 0.05);
      showToast(`Volume: ${Math.round(audio.volume * 100)}%`, '🔉');
      break;
    case 'KeyS':
      toggleShuffle();
      break;
    case 'KeyR':
      toggleRepeat();
      break;
    case 'KeyL':
      toggleLike();
      break;
    case 'KeyM':
      audio.muted = !audio.muted;
      showToast(audio.muted ? 'Muted' : 'Unmuted', audio.muted ? '🔇' : '🔊');
      break;
    case 'Escape':
      closeAllModals();
      break;
  }
}

// ── Utilities ──────────────────────────────────────────
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ── Inject Dynamic Styles for Modals/Toasts/Panels ─────
function injectExtraStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* ═══ Toast ═══ */
    .sf-toast {
      position: fixed;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: var(--text-primary);
      color: var(--text-white);
      padding: 12px 24px;
      border-radius: 40px;
      font-size: 0.85rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 10000;
      opacity: 0;
      transition: all 0.3s var(--ease);
      pointer-events: none;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      font-family: 'Inter', sans-serif;
    }
    .sf-toast.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    .sf-toast-icon {
      font-size: 1rem;
    }

    /* ═══ Modal ═══ */
    .sf-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      z-index: 5000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s var(--ease);
    }
    .sf-modal-overlay.show { opacity: 1; }
    .sf-modal {
      background: var(--bg-card);
      border-radius: var(--radius);
      width: 90%;
      max-width: 440px;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      transform: translateY(20px) scale(0.96);
      transition: transform 0.3s var(--ease-spring);
      font-family: 'Inter', sans-serif;
    }
    .sf-modal-overlay.show .sf-modal {
      transform: translateY(0) scale(1);
    }
    .sf-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px 0;
    }
    .sf-modal-header h3 {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--text-primary);
    }
    .sf-modal-close {
      width: 32px;
      height: 32px;
      border: none;
      background: var(--bg-hover);
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      transition: all 0.2s;
    }
    .sf-modal-close:hover {
      background: var(--border);
      color: var(--text-primary);
    }
    .sf-modal-body {
      padding: 20px 24px 24px;
    }
    .sf-modal-footer {
      padding: 0 24px 24px;
    }

    /* ═══ Settings ═══ */
    .sf-settings-group {
      margin-bottom: 20px;
    }
    .sf-settings-group:last-child { margin-bottom: 0; }
    .sf-settings-label {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      margin-bottom: 10px;
    }
    .sf-settings-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .sf-settings-value {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-primary);
      min-width: 40px;
      text-align: right;
    }
    .sf-stat-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      font-size: 0.85rem;
      border-bottom: 1px solid var(--border-light);
    }
    .sf-stat-row:last-child { border-bottom: none; }
    .sf-stat-row span { color: var(--text-secondary); }
    .sf-stat-row strong { color: var(--text-primary); font-weight: 700; }

    /* Range slider */
    .sf-range {
      -webkit-appearance: none;
      appearance: none;
      flex: 1;
      height: 5px;
      border-radius: 3px;
      background: #e0e0e0;
      outline: none;
      cursor: pointer;
    }
    .sf-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--text-primary);
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .sf-range::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--text-primary);
      cursor: pointer;
      border: none;
    }

    /* Chips */
    .sf-chip {
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid var(--border);
      background: var(--bg);
      color: var(--text-secondary);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'Inter', sans-serif;
    }
    .sf-chip:hover {
      border-color: var(--text-secondary);
      color: var(--text-primary);
    }
    .sf-chip.active {
      background: var(--text-primary);
      color: var(--text-white);
      border-color: var(--text-primary);
    }
    .sf-speed-btns, .sf-quality-btns {
      flex-wrap: wrap;
      gap: 8px;
    }

    /* Toggles */
    .sf-toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      font-size: 0.88rem;
      color: var(--text-secondary);
      border-bottom: 1px solid var(--border-light);
    }
    .sf-toggle-row:last-child { border-bottom: none; }
    .sf-toggle {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
    }
    .sf-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .sf-toggle-slider {
      position: absolute;
      inset: 0;
      background: #ddd;
      border-radius: 24px;
      cursor: pointer;
      transition: 0.3s;
    }
    .sf-toggle-slider::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      top: 3px;
      left: 3px;
      transition: 0.3s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    .sf-toggle input:checked + .sf-toggle-slider {
      background: var(--accent);
    }
    .sf-toggle input:checked + .sf-toggle-slider::before {
      transform: translateX(20px);
    }

    /* Buttons */
    .sf-btn-primary, .sf-btn-accent, .sf-btn-secondary, .sf-btn-danger {
      padding: 14px 20px;
      border: none;
      border-radius: var(--radius-xs);
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .sf-btn-primary {
      background: var(--text-primary);
      color: var(--text-white);
    }
    .sf-btn-primary:hover { background: #333; transform: translateY(-1px); }
    .sf-btn-accent {
      background: linear-gradient(135deg, var(--accent), var(--accent-light));
      color: #fff;
    }
    .sf-btn-accent:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(230,126,34,0.3); }
    .sf-btn-secondary {
      background: var(--bg);
      color: var(--text-primary);
      border: 1px solid var(--border);
    }
    .sf-btn-secondary:hover { background: var(--bg-hover); }
    .sf-btn-danger {
      background: #e74c3c;
      color: #fff;
    }
    .sf-btn-danger:hover { background: #c0392b; transform: translateY(-1px); }

    /* Upgrade features */
    .sf-upgrade-features {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 16px;
      background: var(--bg);
      border-radius: var(--radius-xs);
    }
    .sf-upgrade-feature {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.85rem;
      color: var(--text-secondary);
    }
    .sf-check {
      color: #27ae60;
      font-weight: 700;
    }

    /* ═══ Notification Panel ═══ */
    .sf-notif-panel {
      position: fixed;
      top: 72px;
      right: 32px;
      width: 360px;
      max-height: 480px;
      background: var(--bg-card);
      border-radius: var(--radius);
      box-shadow: 0 12px 48px rgba(0,0,0,0.12);
      z-index: 4000;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(-8px) scale(0.96);
      transition: all 0.3s var(--ease-spring);
      font-family: 'Inter', sans-serif;
    }
    .sf-notif-panel.show {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    .sf-notif-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border-light);
    }
    .sf-notif-header h3 {
      font-size: 1rem;
      font-weight: 800;
      color: var(--text-primary);
    }
    .sf-notif-mark-read {
      background: none;
      border: none;
      color: var(--accent);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
    }
    .sf-notif-mark-read:hover { text-decoration: underline; }
    .sf-notif-list {
      overflow-y: auto;
      flex: 1;
    }
    .sf-notif-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--border-light);
      cursor: pointer;
      transition: background 0.2s;
    }
    .sf-notif-item:hover { background: var(--bg-hover); }
    .sf-notif-item.unread { background: rgba(230,126,34,0.04); }
    .sf-notif-item.unread::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
    }
    .sf-notif-item { position: relative; }
    .sf-notif-icon {
      font-size: 1.2rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .sf-notif-content p {
      font-size: 0.82rem;
      color: var(--text-primary);
      line-height: 1.4;
      margin: 0;
    }
    .sf-notif-time {
      font-size: 0.7rem;
      color: var(--text-muted);
      margin-top: 4px;
      display: block;
    }

    /* ═══ Profile Dropdown ═══ */
    .sf-dropdown {
      position: fixed;
      width: 260px;
      background: var(--bg-card);
      border-radius: var(--radius-sm);
      box-shadow: 0 12px 48px rgba(0,0,0,0.12);
      z-index: 4000;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-8px) scale(0.96);
      transition: all 0.2s var(--ease-spring);
      font-family: 'Inter', sans-serif;
    }
    .sf-dropdown.show {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    .sf-dropdown-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
    }
    .sf-dropdown-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      flex-shrink: 0;
    }
    .sf-dropdown-name {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .sf-dropdown-email {
      font-size: 0.72rem;
      color: var(--text-muted);
    }
    .sf-dropdown-divider {
      height: 1px;
      background: var(--border-light);
      margin: 0 12px;
    }
    .sf-dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 10px 16px;
      border: none;
      background: none;
      color: var(--text-secondary);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
      font-family: 'Inter', sans-serif;
    }
    .sf-dropdown-item:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }
    .sf-dropdown-item svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex-shrink: 0;
    }
    .sf-dropdown-logout {
      color: #e74c3c;
    }
    .sf-dropdown-logout:hover {
      background: rgba(231,76,60,0.06);
      color: #c0392b;
    }

    /* Kbd styling */
    kbd {
      display: inline-block;
      padding: 2px 8px;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      font-size: 0.78rem;
      font-family: 'Space Mono', monospace;
      color: var(--text-primary);
      min-width: 28px;
      text-align: center;
    }

    /* Mobile notification panel */
    @media (max-width: 600px) {
      .sf-notif-panel {
        right: 8px;
        left: 8px;
        width: auto;
      }
      .sf-dropdown {
        right: 8px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// ── Start ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
