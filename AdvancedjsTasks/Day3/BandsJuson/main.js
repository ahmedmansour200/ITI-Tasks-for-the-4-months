document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'rockbands.json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            populateBandsDropdown(data);
        }
    };
    xhr.send();

    function populateBandsDropdown(bands) {
        var bandsDropdown = document.getElementById('bands');
        var bandNames = Object.keys(bands);

        bandNames.forEach(band => {
            var option = document.createElement('option');
            option.value = band;
            option.textContent = capitalizeFirstLetter(band);
            bandsDropdown.appendChild(option);
        });

        bandsDropdown.addEventListener('change', function() {
            var selectedBand = this.value;
            populateArtistsDropdown(bands[selectedBand]);
        });
    }

    function populateArtistsDropdown(artists) {
        var artistsDropdown = document.getElementById('artists');
        artistsDropdown.innerHTML = ''; // Clear previous artists
        artistsDropdown.disabled = false;
        
        var defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select an artist';
        artistsDropdown.appendChild(defaultOption);

        artists.forEach(artist => {
            var option = document.createElement('option');
            option.value = artist.value;
            option.textContent = artist.name;
            artistsDropdown.appendChild(option);
        });

        artistsDropdown.addEventListener('change', function() {
            if (this.value) {
                window.open(this.value, '_blank');
            }
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
