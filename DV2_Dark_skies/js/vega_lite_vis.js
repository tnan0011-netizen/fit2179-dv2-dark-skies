// Vega-Lite visualisation embeds.
// Each chart is stored as a separate .vg.json file to match the FIT3179 example style.

const embedOptions = {
  actions: false
};

vegaEmbed("#hero_map", "visualisations/hero_map.vg.json", embedOptions);
vegaEmbed("#brightest_states", "visualisations/brightest_states.vg.json", embedOptions);
vegaEmbed("#capital_city_brightness", "visualisations/capital_city_brightness.vg.json", embedOptions);
vegaEmbed("#brightness_trend", "visualisations/brightness_trend.vg.json", embedOptions);
vegaEmbed("#darksky_places_map", "visualisations/darksky_places_map.vg.json", embedOptions);
vegaEmbed("#darkest_regions", "visualisations/darkest_regions.vg.json", embedOptions);
vegaEmbed("#state_year_heatmap", "visualisations/state_year_heatmap.vg.json", embedOptions);
vegaEmbed("#population_brightness_scatter", "visualisations/population_brightness_scatter.vg.json", embedOptions);
vegaEmbed("#population_brightness_band", "visualisations/population_brightness_band.vg.json", embedOptions);
vegaEmbed("#remoteness_brightness", "visualisations/remoteness_brightness.vg.json", embedOptions);
vegaEmbed("#cloud_cover", "visualisations/cloud_cover.vg.json", embedOptions);
vegaEmbed("#stargazing_ranking", "visualisations/stargazing_ranking.vg.json", embedOptions);
