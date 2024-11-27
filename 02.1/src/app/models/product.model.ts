export interface ProductList {
    count: string
    page: string
    page_count: number
    page_size: number
    products: Product[]
    skip: number
  }
  
  export interface Product {
    _id: string
    _keywords: string[]
    abbreviated_product_name?: string
    abbreviated_product_name_fr: string
    abbreviated_product_name_fr_imported: string
    abbreviated_product_name_imported?: string
    added_countries_tags: any[]
    additives_n: number
    additives_original_tags: any[]
    additives_tags: any[]
    allergens: string
    allergens_from_ingredients: string
    allergens_from_user: string
    allergens_hierarchy: string[]
    allergens_imported: string
    allergens_lc: string
    allergens_tags: string[]
    amino_acids_prev_tags: any[]
    amino_acids_tags: any[]
    brands: string
    brands_imported: string
    brands_tags: string[]
    categories: string
    categories_hierarchy: string[]
    categories_imported: string
    categories_lc: string
    categories_old: string
    categories_properties: CategoriesProperties
    categories_properties_tags: string[]
    categories_tags: string[]
    category_properties: CategoryProperties
    checkers_tags: any[]
    ciqual_food_name_tags: string[]
    cities_tags: any[]
    code: string
    codes_tags: string[]
    compared_to_category: string
    complete: number
    completeness: string
    conservation_conditions?: string
    conservation_conditions_fr: string
    conservation_conditions_fr_imported: string
    correctors_tags: string[]
    countries: string
    countries_beforescanbot: string
    countries_hierarchy: string[]
    countries_imported: string
    countries_lc: string
    countries_tags: string[]
    created_t: number
    creator: string
    customer_service?: string
    customer_service_fr: string
    customer_service_fr_imported: string
    data_quality_bugs_tags: any[]
    data_quality_errors_tags: any[]
    data_quality_info_tags: string[]
    data_quality_tags: string[]
    data_quality_warnings_tags: string[]
    data_sources: string
    data_sources_imported: string
    data_sources_tags: string[]
    debug_param_sorted_langs: string[]
    debug_tags: string[]
    ecoscore_data: EcoscoreData
    ecoscore_extended_data: EcoscoreExtendedData
    ecoscore_extended_data_version: string
    ecoscore_grade: string
    ecoscore_score: number
    ecoscore_tags: string[]
    editors: string[]
    editors_tags: string[]
    emb_codes: string
    emb_codes_20141016: string
    emb_codes_orig: string
    emb_codes_tags: any[]
    entry_dates_tags: string[]
    environment_impact_level: string
    environment_impact_level_tags: any[]
    expiration_date: string
    food_groups: string
    food_groups_tags: string[]
    "fruits-vegetables-nuts_100g_estimate": number
    generic_name: string
    generic_name_bg?: string
    generic_name_de: string
    generic_name_en: string
    generic_name_es: string
    generic_name_fr: string
    generic_name_fr_imported: string
    generic_name_hr: string
    generic_name_it: string
    generic_name_ru?: string
    generic_name_sk?: string
    generic_name_sr?: string
    generic_name_xx?: string
    generic_name_xx_debug_tags?: any[]
    grades: Grades2
    id: string
    image_front_small_url: string
    image_front_thumb_url: string
    image_front_url: string
    image_small_url: string
    image_thumb_url: string
    image_url: string
    images: Images
    informers_tags: string[]
    ingredients: Ingredient[]
    ingredients_analysis: IngredientsAnalysis
    ingredients_analysis_tags: string[]
    ingredients_debug: string | undefined[]
    ingredients_from_or_that_may_be_from_palm_oil_n: number
    ingredients_from_palm_oil_n: number
    ingredients_from_palm_oil_tags: any[]
    ingredients_hierarchy: string[]
    ingredients_ids_debug: string[]
    ingredients_lc: string
    ingredients_n: number
    ingredients_n_tags: string[]
    ingredients_non_nutritive_sweeteners_n: number
    ingredients_original_tags: string[]
    ingredients_percent_analysis: number
    ingredients_sweeteners_n: number
    ingredients_tags: string[]
    ingredients_text: string
    ingredients_text_bg?: string
    ingredients_text_de: string
    ingredients_text_debug: string
    ingredients_text_en: string
    ingredients_text_es: string
    ingredients_text_fr: string
    ingredients_text_fr_imported: string
    ingredients_text_hr: string
    ingredients_text_it: string
    ingredients_text_ru?: string
    ingredients_text_sk?: string
    ingredients_text_sr?: string
    ingredients_text_with_allergens: string
    ingredients_text_with_allergens_bg?: string
    ingredients_text_with_allergens_de: string
    ingredients_text_with_allergens_en: string
    ingredients_text_with_allergens_es: string
    ingredients_text_with_allergens_fr: string
    ingredients_text_with_allergens_hr: string
    ingredients_text_with_allergens_it: string
    ingredients_text_with_allergens_ru?: string
    ingredients_text_with_allergens_sk?: string
    ingredients_text_with_allergens_sr?: string
    ingredients_text_xx?: string
    ingredients_text_xx_debug_tags?: any[]
    ingredients_that_may_be_from_palm_oil_n: number
    ingredients_that_may_be_from_palm_oil_tags: any[]
    ingredients_with_specified_percent_n: number
    ingredients_with_specified_percent_sum: number
    ingredients_with_unspecified_percent_n: number
    ingredients_with_unspecified_percent_sum: number
    ingredients_without_ciqual_codes: string[]
    ingredients_without_ciqual_codes_n: number
    ingredients_without_ecobalyse_ids: string[]
    ingredients_without_ecobalyse_ids_n: number
    interface_version_created: string
    interface_version_modified: string
    known_ingredients_n: number
    labels: string
    labels_hierarchy: string[]
    labels_lc: string
    labels_old: string
    labels_tags: string[]
    lang: string
    lang_imported: string
    languages: Languages
    languages_codes: LanguagesCodes
    languages_hierarchy: string[]
    languages_tags: string[]
    last_edit_dates_tags: string[]
    last_image_dates_tags: string[]
    last_image_t: number
    last_modified_t: number
    last_updated_t: number
    lc: string
    lc_imported: string
    link: string
    main_countries_tags: any[]
    manufacturing_places: string
    manufacturing_places_tags: string[]
    max_imgid: string
    minerals_prev_tags: any[]
    minerals_tags: any[]
    misc_tags: string[]
    no_nutrition_data: string
    no_nutrition_data_imported?: string
    nova_group: number
    nova_group_debug: string
    nova_groups: string
    nova_groups_markers: NovaGroupsMarkers
    nova_groups_tags: string[]
    nucleotides_prev_tags: any[]
    nucleotides_tags: any[]
    nutrient_levels: NutrientLevels
    nutrient_levels_tags: string[]
    nutriments: Nutriments
    nutriscore: Nutriscore
    nutriscore_2021_tags: string[]
    nutriscore_2023_tags: string[]
    nutriscore_data: NutriscoreData
    nutriscore_grade: string
    nutriscore_score: number
    nutriscore_score_opposite: number
    nutriscore_tags: string[]
    nutriscore_version: string
    nutrition_data: string
    nutrition_data_per: string
    nutrition_data_per_imported: string
    nutrition_data_prepared: string
    nutrition_data_prepared_per: string
    nutrition_data_prepared_per_imported: string
    nutrition_grade_fr: string
    nutrition_grades: string
    nutrition_grades_tags: string[]
    nutrition_score_beverage: number
    nutrition_score_debug: string
    nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number
    nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number
    obsolete: string
    obsolete_imported: string
    obsolete_since_date: string
    origin: string
    origin_bg?: string
    origin_de: string
    origin_en: string
    origin_es: string
    origin_fr: string
    origin_hr: string
    origin_it: string
    origin_ru?: string
    origin_sk?: string
    origin_sr?: string
    origins: string
    origins_hierarchy: string[]
    origins_lc: string
    origins_old: string
    origins_tags: string[]
    other_nutritional_substances_prev_tags: any[]
    other_nutritional_substances_tags: any[]
    owner: string
    owner_fields: OwnerFields
    owner_imported: string
    owners_tags: string
    packaging: string
    packaging_hierarchy: string[]
    packaging_imported: string
    packaging_lc: string
    packaging_materials_tags: string[]
    packaging_old: string
    packaging_old_before_taxonomization: string
    packaging_recycling_tags: string[]
    packaging_shapes_tags: string[]
    packaging_tags: string[]
    packaging_text: string
    packaging_text_bg?: string
    packaging_text_de: string
    packaging_text_en: string
    packaging_text_es: string
    packaging_text_fr: string
    packaging_text_hr: string
    packaging_text_it: string
    packaging_text_ru?: string
    packaging_text_sk?: string
    packaging_text_sr?: string
    packagings: Packaging3[]
    packagings_complete: number
    packagings_materials: PackagingsMaterials
    packagings_materials_main?: string
    packagings_n: number
    photographers_tags: string[]
    pnns_groups_1: string
    pnns_groups_1_tags: string[]
    pnns_groups_2: string
    pnns_groups_2_tags: string[]
    popularity_key: string
    popularity_tags: string[]
    preparation?: string
    preparation_fr: string
    preparation_fr_imported: string
    producer_version_id: string
    producer_version_id_imported: string
    product_name: string
    product_name_bg?: string
    product_name_de: string
    product_name_en: string
    product_name_es: string
    product_name_fr: string
    product_name_fr_imported: string
    product_name_hr: string
    product_name_it: string
    product_name_ja?: string
    product_name_ru?: string
    product_name_sk?: string
    product_name_sr?: string
    product_name_xx?: string
    product_name_xx_debug_tags?: any[]
    product_quantity: number
    product_quantity_unit: string
    product_type: string
    purchase_places: string
    purchase_places_tags: string[]
    quantity: string
    quantity_imported: string
    removed_countries_tags: any[]
    rev: number
    scans_n: number
    scores: Scores2
    selected_images: SelectedImages
    serving_quantity: number
    serving_quantity_unit: string
    serving_size: string
    serving_size_imported: string
    sortkey: number
    sources: Source[]
    sources_fields: SourcesFields
    states: string
    states_hierarchy: string[]
    states_tags: string[]
    stores: string
    stores_tags: string[]
    teams: string
    teams_tags: string[]
    traces: string
    traces_from_ingredients: string
    traces_from_user: string
    traces_hierarchy: string[]
    traces_imported: string
    traces_lc: string
    traces_tags: string[]
    unique_scans_n: number
    unknown_ingredients_n: number
    unknown_nutrients_tags: any[]
    update_key: string
    url: string
    vitamins_prev_tags: any[]
    vitamins_tags: any[]
    weighers_tags: string[]
    weighters_tags?: any[]
    checkers?: any[]
    correctors?: string[]
    generic_name_da?: string
    generic_name_el?: string
    generic_name_fi?: string
    generic_name_hu?: string
    generic_name_nl?: string
    generic_name_no?: string
    generic_name_sl?: string
    generic_name_sv?: string
    informers?: string[]
    ingredients_text_da?: string
    ingredients_text_el?: string
    ingredients_text_fi?: string
    ingredients_text_hu?: string
    ingredients_text_nl?: string
    ingredients_text_no?: string
    ingredients_text_sl?: string
    ingredients_text_sv?: string
    ingredients_text_with_allergens_da?: string
    ingredients_text_with_allergens_el?: string
    ingredients_text_with_allergens_fi?: string
    ingredients_text_with_allergens_hu?: string
    ingredients_text_with_allergens_nl?: string
    ingredients_text_with_allergens_no?: string
    ingredients_text_with_allergens_sl?: string
    ingredients_text_with_allergens_sv?: string
    last_editor?: string
    last_modified_by?: string
    nutriments_estimated?: NutrimentsEstimated
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients?: number
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value?: number
    origin_da?: string
    origin_el?: string
    origin_fi?: string
    origin_hu?: string
    origin_nl?: string
    origin_no?: string
    origin_sl?: string
    origin_sv?: string
    packaging_text_da?: string
    packaging_text_el?: string
    packaging_text_fi?: string
    packaging_text_hu?: string
    packaging_text_nl?: string
    packaging_text_no?: string
    packaging_text_sl?: string
    packaging_text_sv?: string
    photographers?: string[]
    product_name_da?: string
    product_name_el?: string
    product_name_fi?: string
    product_name_hu?: string
    product_name_nl?: string
    product_name_no?: string
    product_name_sl?: string
    product_name_sv?: string
  }
  
  export interface CategoriesProperties {
    "agribalyse_food_code:en"?: string
    "ciqual_food_code:en": string
    "agribalyse_proxy_food_code:en"?: string
  }
  
  export interface CategoryProperties {}
  
  export interface EcoscoreData {
    adjustments: Adjustments
    agribalyse: Agribalyse
    grade: string
    grades: Grades
    missing: Missing
    missing_data_warning: number
    previous_data: PreviousData
    score: number
    scores: Scores
    status: string
  }
  
  export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients
    packaging: Packaging
    production_system: ProductionSystem
    threatened_species: ThreatenedSpecies
  }
  
  export interface OriginsOfIngredients {
    aggregated_origins: AggregatedOrigin[]
    epi_score: any
    epi_value: number
    origins_from_categories: string[]
    origins_from_origins_field: string[]
    transportation_score: number
    transportation_scores: TransportationScores
    transportation_value: number
    transportation_values: TransportationValues
    value: number
    values: Values
    warning?: string
  }
  
  export interface AggregatedOrigin {
    epi_score: string
    origin: string
    percent: number
    transportation_score: number
  }
  
  export interface TransportationScores {
    ad: number
    al: any
    at: any
    ax: any
    ba: number
    be: number
    bg: any
    ch: any
    cy: number
    cz: any
    de: number
    dk: number
    dz: number
    ee: any
    eg: any
    es: any
    fi: number
    fo: any
    fr: number
    gg: number
    gi: any
    gr: number
    hr: number
    hu: any
    ie: any
    il: any
    im: number
    is: number
    it: number
    je: number
    lb: any
    li: any
    lt: number
    lu: any
    lv: any
    ly: number
    ma: any
    mc: any
    md: number
    me: number
    mk: number
    mt: any
    nl: any
    no: any
    pl: any
    ps: any
    pt: any
    ro: number
    rs: number
    se: any
    si: number
    sj: number
    sk: any
    sm: number
    sy: any
    tn: number
    tr: number
    ua: any
    uk: number
    us: number
    va: any
    world: number
    xk: number
  }
  
  export interface TransportationValues {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface Values {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface Packaging {
    non_recyclable_and_non_biodegradable_materials: number
    packagings: Packaging2[]
    score: number
    value: number
    warning: string
  }
  
  export interface Packaging2 {
    ecoscore_material_score: number
    ecoscore_shape_ratio: any
    material: string
    number_of_units?: number
    quantity_per_unit?: string
    quantity_per_unit_unit?: string
    quantity_per_unit_value?: number
    recycling?: string
    shape: string
    weight_measured?: string
  }
  
  export interface ProductionSystem {
    labels: any[]
    value: number
    warning: string
  }
  
  export interface ThreatenedSpecies {}
  
  export interface Agribalyse {
    agribalyse_food_code?: string
    co2_agriculture: string
    co2_consumption: number
    co2_distribution: string
    co2_packaging: string
    co2_processing: string
    co2_total: string
    co2_transportation: string
    code: string
    dqr: string
    ef_agriculture: string
    ef_consumption: number
    ef_distribution: string
    ef_packaging: string
    ef_processing: string
    ef_total: string
    ef_transportation: string
    is_beverage: number
    name_en: string
    name_fr: string
    score: number
    version: string
    agribalyse_proxy_food_code?: string
  }
  
  export interface Grades {
    ad: string
    al: string
    at: string
    ax: string
    ba: string
    be: string
    bg: string
    ch: string
    cy: string
    cz: string
    de: string
    dk: string
    dz: string
    ee: string
    eg: string
    es: string
    fi: string
    fo: string
    fr: string
    gg: string
    gi: string
    gr: string
    hr: string
    hu: string
    ie: string
    il: string
    im: string
    is: string
    it: string
    je: string
    lb: string
    li: string
    lt: string
    lu: string
    lv: string
    ly: string
    ma: string
    mc: string
    md: string
    me: string
    mk: string
    mt: string
    nl: string
    no: string
    pl: string
    ps: string
    pt: string
    ro: string
    rs: string
    se: string
    si: string
    sj: string
    sk: string
    sm: string
    sy: string
    tn: string
    tr: string
    ua: string
    uk: string
    us: string
    va: string
    world: string
    xk: string
  }
  
  export interface Missing {
    labels: number
    origins?: number
    packagings: number
  }
  
  export interface PreviousData {
    agribalyse: Agribalyse2
    grade: string
    score: number
  }
  
  export interface Agribalyse2 {
    agribalyse_food_code: string
    co2_agriculture: string
    co2_consumption: number
    co2_distribution: string
    co2_packaging: string
    co2_processing: string
    co2_total: string
    co2_transportation: string
    code: string
    dqr: string
    ef_agriculture: string
    ef_consumption: number
    ef_distribution: string
    ef_packaging: string
    ef_processing: string
    ef_total: string
    ef_transportation: string
    is_beverage: number
    name_en: string
    name_fr: string
    score: number
  }
  
  export interface Scores {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface EcoscoreExtendedData {
    impact: Impact
  }
  
  export interface Impact {
    average_total_used_mass?: string
    calculation_time?: string
    confidence_score_distribution?: string[]
    const_relax_coef?: number
    data_sources?: DataSources
    ignored_unknown_ingredients?: any[]
    impact_distributions?: ImpactDistributions
    impacts_geom_means?: ImpactsGeomMeans
    impacts_geom_stdevs?: ImpactsGeomStdevs
    impacts_quantiles?: ImpactsQuantiles
    impacts_relative_interquartile?: ImpactsRelativeInterquartile
    impacts_units?: ImpactsUnits
    ingredients_impacts_share?: IngredientsImpactsShare
    ingredients_mass_share?: IngredientsMassShare
    mean_confidence_interval_distribution?: MeanConfidenceIntervalDistribution
    number_of_ingredients?: number
    number_of_runs?: number
    product_quantity?: number
    recipes?: Recipe[]
    reliability?: number
    total_used_mass_distribution?: string[]
    uncharacterized_ingredients: UncharacterizedIngredients
    uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportion
    uncharacterized_ingredients_ratio: UncharacterizedIngredientsRatio
    warnings: string[]
    ef_single_score_log_stddev?: string
    likeliest_impacts?: LikeliestImpacts
    likeliest_recipe?: LikeliestRecipe
    mass_ratio_uncharacterized?: number
  }
  
  export interface DataSources {
    "en:durum_wheat_semolina_pasta": EnDurumWheatSemolinaPasta
    "en:water": EnWater
  }
  
  export interface EnDurumWheatSemolinaPasta {
    environmental_impact: EnvironmentalImpact[]
    nutrition: Nutrition[]
  }
  
  export interface EnvironmentalImpact {
    database: string
    entry: string
  }
  
  export interface Nutrition {
    database: string
    entry: string
  }
  
  export interface EnWater {
    environmental_impact: EnvironmentalImpact2[]
    nutrition: Nutrition2[]
  }
  
  export interface EnvironmentalImpact2 {
    database: string
    entry: string
  }
  
  export interface Nutrition2 {
    database: string
    entry: string
  }
  
  export interface ImpactDistributions {
    Climate_change: string[]
    EF_single_score: string[]
  }
  
  export interface ImpactsGeomMeans {
    Climate_change: string
    EF_single_score: string
  }
  
  export interface ImpactsGeomStdevs {
    Climate_change: string
    EF_single_score: string
  }
  
  export interface ImpactsQuantiles {
    Climate_change: ClimateChange
    EF_single_score: EfSingleScore
  }
  
  export interface ClimateChange {
    "0_05": string
    "0_25": string
    "0_5": string
    "0_75": string
    "0_95": string
  }
  
  export interface EfSingleScore {
    "0_05": string
    "0_25": string
    "0_5": string
    "0_75": string
    "0_95": string
  }
  
  export interface ImpactsRelativeInterquartile {
    Climate_change: string
    EF_single_score: string
  }
  
  export interface ImpactsUnits {
    Climate_change: string
    EF_single_score: string
  }
  
  export interface IngredientsImpactsShare {
    Climate_change: ClimateChange2
    EF_single_score: EfSingleScore2
  }
  
  export interface ClimateChange2 {
    "en:durum_wheat_semolina_pasta": string
    "en:water": string
  }
  
  export interface EfSingleScore2 {
    "en:durum_wheat_semolina_pasta": string
    "en:water": string
  }
  
  export interface IngredientsMassShare {
    "en:durum_wheat_semolina_pasta": string
    "en:water": string
  }
  
  export interface MeanConfidenceIntervalDistribution {
    Climate_change: string[][]
    EF_single_score: string[][]
  }
  
  export interface Recipe {
    "en:durum_wheat_semolina_pasta": string
    "en:water": string
  }
  
  export interface UncharacterizedIngredients {
    impact: any[]
    nutrition: any[]
  }
  
  export interface UncharacterizedIngredientsMassProportion {
    impact: number
    nutrition: number
  }
  
  export interface UncharacterizedIngredientsRatio {
    impact: number
    nutrition: number
  }
  
  export interface LikeliestImpacts {
    Climate_change: string
    EF_single_score: string
  }
  
  export interface LikeliestRecipe {
    "en:water": string
    "en:whole_durum_wheat_semolina": string
  }
  
  export interface Grades2 {}
  
  export interface Images {
    "1": N1
    "10": N10
    "11": N11
    "12": N12
    "13": N13
    "14": N14
    "15": N15
    "16": N16
    "17": N17
    "18": N18
    "19": N19
    "2": N2
    "20": N20
    "21": N21
    "24": N24
    "25": N25
    "26": N26
    "27": N27
    "28": N28
    "29": N29
    "3": N3
    "30": N30
    "31": N31
    "32": N32
    "33": N33
    "34": N34
    "35"?: N35
    "36": N36
    "38": N38
    "39": N39
    "4": N4
    "40": N40
    "41": N41
    "42": N42
    "43": N43
    "44": N44
    "45": N45
    "46": N46
    "47": N47
    "48": N48
    "5": N5
    "51": N51
    "52": N52
    "54": N54
    "55": N55
    "56": N56
    "57": N57
    "58": N58
    "6": N6
    "61": N61
    "62": N62
    "63": N63
    "64": N64
    "65": N65
    "66": N66
    "67": N67
    "68": N68
    "69": N69
    "7": N7
    "70": N70
    "71"?: N71
    "72"?: N72
    "73"?: N73
    "74"?: N74
    "75"?: N75
    "76"?: N76
    "77"?: N77
    "78"?: N78
    "8": N8
    "82"?: N82
    "83"?: N83
    "84"?: N84
    "85"?: N85
    "86"?: N86
    "87"?: N87
    "88"?: N88
    "89"?: N89
    "9": N9
    "90"?: N90
    "91"?: N91
    "92"?: N92
    "93"?: N93
    "94"?: N94
    "95"?: N95
    "96"?: N96
    front_bg?: FrontBg
    front_de: FrontDe
    front_en: FrontEn
    front_es: FrontEs
    front_fr: FrontFr
    front_it: FrontIt
    front_ru?: FrontRu
    front_sr?: FrontSr
    ingredients_de: IngredientsDe
    ingredients_en: IngredientsEn
    ingredients_fr: IngredientsFr
    ingredients_hr: IngredientsHr
    ingredients_it?: IngredientsIt
    ingredients_ru?: IngredientsRu
    ingredients_sr?: IngredientsSr
    nutrition_de: NutritionDe
    nutrition_en?: NutritionEn
    nutrition_fr: NutritionFr
    nutrition_it: NutritionIt
    nutrition_ru?: NutritionRu
    nutrition_sr?: NutritionSr
    packaging_en?: PackagingEn
    packaging_fr: PackagingFr
    packaging_it?: PackagingIt
    "22"?: N22
    "23"?: N23
    "37"?: N37
    "49"?: N49
    "50"?: N50
    "53"?: N53
    "59"?: N59
    "60"?: N60
    front?: Front
    front_da?: FrontDa
    front_fi?: FrontFi
    front_hu?: FrontHu
    front_nl?: FrontNl
    front_no?: FrontNo
    front_sv?: FrontSv
    ingredients?: Ingredients
    ingredients_da?: IngredientsDa
    ingredients_el?: IngredientsEl
    ingredients_fi?: IngredientsFi
    ingredients_hu?: IngredientsHu
    ingredients_nl?: IngredientsNl
    ingredients_no?: IngredientsNo
    ingredients_sl?: IngredientsSl
    ingredients_sv?: IngredientsSv
    nutrition?: Nutrition3
    nutrition_da?: NutritionDa
    nutrition_fi?: NutritionFi
    nutrition_no?: NutritionNo
    nutrition_sv?: NutritionSv
    packaging_da?: PackagingDa
    packaging_de?: PackagingDe
    packaging_fi?: PackagingFi
    packaging_no?: PackagingNo
    packaging_sv?: PackagingSv
  }
  
  export interface N1 {
    sizes: Sizes
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes {
    "100": N100
    "400": N400
    full: Full
  }
  
  export interface N100 {
    h: number
    w: number
  }
  
  export interface N400 {
    h: number
    w: number
  }
  
  export interface Full {
    h: number
    w: number
  }
  
  export interface N10 {
    sizes: Sizes2
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes2 {
    "100": N1002
    "400": N4002
    full: Full2
  }
  
  export interface N1002 {
    h: number
    w: number
  }
  
  export interface N4002 {
    h: number
    w: number
  }
  
  export interface Full2 {
    h: number
    w: number
  }
  
  export interface N11 {
    sizes: Sizes3
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes3 {
    "100": N1003
    "400": N4003
    full: Full3
  }
  
  export interface N1003 {
    h: number
    w: number
  }
  
  export interface N4003 {
    h: number
    w: number
  }
  
  export interface Full3 {
    h: number
    w: number
  }
  
  export interface N12 {
    sizes: Sizes4
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes4 {
    "100": N1004
    "400": N4004
    full: Full4
  }
  
  export interface N1004 {
    h: number
    w: number
  }
  
  export interface N4004 {
    h: number
    w: number
  }
  
  export interface Full4 {
    h: number
    w: number
  }
  
  export interface N13 {
    sizes: Sizes5
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes5 {
    "100": N1005
    "400": N4005
    full: Full5
  }
  
  export interface N1005 {
    h: number
    w: number
  }
  
  export interface N4005 {
    h: number
    w: number
  }
  
  export interface Full5 {
    h: number
    w: number
  }
  
  export interface N14 {
    sizes: Sizes6
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes6 {
    "100": N1006
    "400": N4006
    full: Full6
  }
  
  export interface N1006 {
    h: number
    w: number
  }
  
  export interface N4006 {
    h: number
    w: number
  }
  
  export interface Full6 {
    h: number
    w: number
  }
  
  export interface N15 {
    sizes: Sizes7
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes7 {
    "100": N1007
    "400": N4007
    full: Full7
  }
  
  export interface N1007 {
    h: number
    w: number
  }
  
  export interface N4007 {
    h: number
    w: number
  }
  
  export interface Full7 {
    h: number
    w: number
  }
  
  export interface N16 {
    sizes: Sizes8
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes8 {
    "100": N1008
    "400": N4008
    full: Full8
  }
  
  export interface N1008 {
    h: number
    w: number
  }
  
  export interface N4008 {
    h: number
    w: number
  }
  
  export interface Full8 {
    h: number
    w: number
  }
  
  export interface N17 {
    sizes: Sizes9
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes9 {
    "100": N1009
    "400": N4009
    full: Full9
  }
  
  export interface N1009 {
    h: number
    w: number
  }
  
  export interface N4009 {
    h: number
    w: number
  }
  
  export interface Full9 {
    h: number
    w: number
  }
  
  export interface N18 {
    sizes: Sizes10
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes10 {
    "100": N10010
    "400": N40010
    full: Full10
  }
  
  export interface N10010 {
    h: number
    w: number
  }
  
  export interface N40010 {
    h: number
    w: number
  }
  
  export interface Full10 {
    h: number
    w: number
  }
  
  export interface N19 {
    sizes: Sizes11
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes11 {
    "100": N10011
    "400": N40011
    full: Full11
  }
  
  export interface N10011 {
    h: number
    w: number
  }
  
  export interface N40011 {
    h: number
    w: number
  }
  
  export interface Full11 {
    h: number
    w: number
  }
  
  export interface N2 {
    sizes: Sizes12
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes12 {
    "100": N10012
    "400": N40012
    full: Full12
  }
  
  export interface N10012 {
    h: number
    w: number
  }
  
  export interface N40012 {
    h: number
    w: number
  }
  
  export interface Full12 {
    h: number
    w: number
  }
  
  export interface N20 {
    sizes: Sizes13
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes13 {
    "100": N10013
    "400": N40013
    full: Full13
  }
  
  export interface N10013 {
    h: number
    w: number
  }
  
  export interface N40013 {
    h: number
    w: number
  }
  
  export interface Full13 {
    h: number
    w: number
  }
  
  export interface N21 {
    sizes: Sizes14
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes14 {
    "100": N10014
    "400": N40014
    full: Full14
  }
  
  export interface N10014 {
    h: number
    w: number
  }
  
  export interface N40014 {
    h: number
    w: number
  }
  
  export interface Full14 {
    h: number
    w: number
  }
  
  export interface N24 {
    sizes: Sizes15
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes15 {
    "100": N10015
    "400": N40015
    full: Full15
  }
  
  export interface N10015 {
    h: number
    w: number
  }
  
  export interface N40015 {
    h: number
    w: number
  }
  
  export interface Full15 {
    h: number
    w: number
  }
  
  export interface N25 {
    sizes: Sizes16
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes16 {
    "100": N10016
    "400": N40016
    full: Full16
  }
  
  export interface N10016 {
    h: number
    w: number
  }
  
  export interface N40016 {
    h: number
    w: number
  }
  
  export interface Full16 {
    h: number
    w: number
  }
  
  export interface N26 {
    sizes: Sizes17
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes17 {
    "100": N10017
    "400": N40017
    full: Full17
  }
  
  export interface N10017 {
    h: number
    w: number
  }
  
  export interface N40017 {
    h: number
    w: number
  }
  
  export interface Full17 {
    h: number
    w: number
  }
  
  export interface N27 {
    sizes: Sizes18
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes18 {
    "100": N10018
    "400": N40018
    full: Full18
  }
  
  export interface N10018 {
    h: number
    w: number
  }
  
  export interface N40018 {
    h: number
    w: number
  }
  
  export interface Full18 {
    h: number
    w: number
  }
  
  export interface N28 {
    sizes: Sizes19
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes19 {
    "100": N10019
    "400": N40019
    full: Full19
  }
  
  export interface N10019 {
    h: number
    w: number
  }
  
  export interface N40019 {
    h: number
    w: number
  }
  
  export interface Full19 {
    h: number
    w: number
  }
  
  export interface N29 {
    sizes: Sizes20
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes20 {
    "100": N10020
    "400": N40020
    full: Full20
  }
  
  export interface N10020 {
    h: number
    w: number
  }
  
  export interface N40020 {
    h: number
    w: number
  }
  
  export interface Full20 {
    h: number
    w: number
  }
  
  export interface N3 {
    sizes: Sizes21
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes21 {
    "100": N10021
    "400": N40021
    full: Full21
  }
  
  export interface N10021 {
    h: number
    w: number
  }
  
  export interface N40021 {
    h: number
    w: number
  }
  
  export interface Full21 {
    h: number
    w: number
  }
  
  export interface N30 {
    sizes: Sizes22
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes22 {
    "100": N10022
    "400": N40022
    full: Full22
  }
  
  export interface N10022 {
    h: number
    w: number
  }
  
  export interface N40022 {
    h: number
    w: number
  }
  
  export interface Full22 {
    h: number
    w: number
  }
  
  export interface N31 {
    sizes: Sizes23
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes23 {
    "100": N10023
    "400": N40023
    full: Full23
  }
  
  export interface N10023 {
    h: number
    w: number
  }
  
  export interface N40023 {
    h: number
    w: number
  }
  
  export interface Full23 {
    h: number
    w: number
  }
  
  export interface N32 {
    sizes: Sizes24
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes24 {
    "100": N10024
    "400": N40024
    full: Full24
  }
  
  export interface N10024 {
    h: number
    w: number
  }
  
  export interface N40024 {
    h: number
    w: number
  }
  
  export interface Full24 {
    h: number
    w: number
  }
  
  export interface N33 {
    sizes: Sizes25
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes25 {
    "100": N10025
    "400": N40025
    full: Full25
  }
  
  export interface N10025 {
    h: number
    w: number
  }
  
  export interface N40025 {
    h: number
    w: number
  }
  
  export interface Full25 {
    h: number
    w: number
  }
  
  export interface N34 {
    sizes: Sizes26
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes26 {
    "100": N10026
    "400": N40026
    full: Full26
  }
  
  export interface N10026 {
    h: number
    w: number
  }
  
  export interface N40026 {
    h: number
    w: number
  }
  
  export interface Full26 {
    h: number
    w: number
  }
  
  export interface N35 {
    sizes: Sizes27
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes27 {
    "100": N10027
    "400": N40027
    full: Full27
  }
  
  export interface N10027 {
    h: number
    w: number
  }
  
  export interface N40027 {
    h: number
    w: number
  }
  
  export interface Full27 {
    h: number
    w: number
  }
  
  export interface N36 {
    sizes: Sizes28
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes28 {
    "100": N10028
    "400": N40028
    full: Full28
  }
  
  export interface N10028 {
    h: number
    w: number
  }
  
  export interface N40028 {
    h: number
    w: number
  }
  
  export interface Full28 {
    h: number
    w: number
  }
  
  export interface N38 {
    sizes: Sizes29
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes29 {
    "100": N10029
    "400": N40029
    full: Full29
  }
  
  export interface N10029 {
    h: number
    w: number
  }
  
  export interface N40029 {
    h: number
    w: number
  }
  
  export interface Full29 {
    h: number
    w: number
  }
  
  export interface N39 {
    sizes: Sizes30
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes30 {
    "100": N10030
    "400": N40030
    full: Full30
  }
  
  export interface N10030 {
    h: number
    w: number
  }
  
  export interface N40030 {
    h: number
    w: number
  }
  
  export interface Full30 {
    h: number
    w: number
  }
  
  export interface N4 {
    sizes: Sizes31
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes31 {
    "100": N10031
    "400": N40031
    full: Full31
  }
  
  export interface N10031 {
    h: number
    w: number
  }
  
  export interface N40031 {
    h: number
    w: number
  }
  
  export interface Full31 {
    h: number
    w: number
  }
  
  export interface N40 {
    sizes: Sizes32
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes32 {
    "100": N10032
    "400": N40032
    full: Full32
  }
  
  export interface N10032 {
    h: number
    w: number
  }
  
  export interface N40032 {
    h: number
    w: number
  }
  
  export interface Full32 {
    h: number
    w: number
  }
  
  export interface N41 {
    sizes: Sizes33
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes33 {
    "100": N10033
    "400": N40033
    full: Full33
  }
  
  export interface N10033 {
    h: number
    w: number
  }
  
  export interface N40033 {
    h: number
    w: number
  }
  
  export interface Full33 {
    h: number
    w: number
  }
  
  export interface N42 {
    sizes: Sizes34
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes34 {
    "100": N10034
    "400": N40034
    full: Full34
  }
  
  export interface N10034 {
    h: number
    w: number
  }
  
  export interface N40034 {
    h: number
    w: number
  }
  
  export interface Full34 {
    h: number
    w: number
  }
  
  export interface N43 {
    sizes: Sizes35
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes35 {
    "100": N10035
    "400": N40035
    full: Full35
  }
  
  export interface N10035 {
    h: number
    w: number
  }
  
  export interface N40035 {
    h: number
    w: number
  }
  
  export interface Full35 {
    h: number
    w: number
  }
  
  export interface N44 {
    sizes: Sizes36
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes36 {
    "100": N10036
    "400": N40036
    full: Full36
  }
  
  export interface N10036 {
    h: number
    w: number
  }
  
  export interface N40036 {
    h: number
    w: number
  }
  
  export interface Full36 {
    h: number
    w: number
  }
  
  export interface N45 {
    sizes: Sizes37
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes37 {
    "100": N10037
    "400": N40037
    full: Full37
  }
  
  export interface N10037 {
    h: number
    w: number
  }
  
  export interface N40037 {
    h: number
    w: number
  }
  
  export interface Full37 {
    h: number
    w: number
  }
  
  export interface N46 {
    sizes: Sizes38
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes38 {
    "100": N10038
    "400": N40038
    full: Full38
  }
  
  export interface N10038 {
    h: number
    w: number
  }
  
  export interface N40038 {
    h: number
    w: number
  }
  
  export interface Full38 {
    h: number
    w: number
  }
  
  export interface N47 {
    sizes: Sizes39
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes39 {
    "100": N10039
    "400": N40039
    full: Full39
  }
  
  export interface N10039 {
    h: number
    w: number
  }
  
  export interface N40039 {
    h: number
    w: number
  }
  
  export interface Full39 {
    h: number
    w: number
  }
  
  export interface N48 {
    sizes: Sizes40
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes40 {
    "100": N10040
    "400": N40040
    full: Full40
  }
  
  export interface N10040 {
    h: number
    w: number
  }
  
  export interface N40040 {
    h: number
    w: number
  }
  
  export interface Full40 {
    h: number
    w: number
  }
  
  export interface N5 {
    sizes: Sizes41
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes41 {
    "100": N10041
    "400": N40041
    full: Full41
  }
  
  export interface N10041 {
    h: number
    w: number
  }
  
  export interface N40041 {
    h: number
    w: number
  }
  
  export interface Full41 {
    h: number
    w: number
  }
  
  export interface N51 {
    sizes: Sizes42
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes42 {
    "100": N10042
    "400": N40042
    full: Full42
  }
  
  export interface N10042 {
    h: number
    w: number
  }
  
  export interface N40042 {
    h: number
    w: number
  }
  
  export interface Full42 {
    h: number
    w: number
  }
  
  export interface N52 {
    sizes: Sizes43
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes43 {
    "100": N10043
    "400": N40043
    full: Full43
  }
  
  export interface N10043 {
    h: number
    w: number
  }
  
  export interface N40043 {
    h: number
    w: number
  }
  
  export interface Full43 {
    h: number
    w: number
  }
  
  export interface N54 {
    sizes: Sizes44
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes44 {
    "100": N10044
    "400": N40044
    full: Full44
  }
  
  export interface N10044 {
    h: number
    w: number
  }
  
  export interface N40044 {
    h: number
    w: number
  }
  
  export interface Full44 {
    h: number
    w: number
  }
  
  export interface N55 {
    sizes: Sizes45
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes45 {
    "100": N10045
    "400": N40045
    full: Full45
  }
  
  export interface N10045 {
    h: number
    w: number
  }
  
  export interface N40045 {
    h: number
    w: number
  }
  
  export interface Full45 {
    h: number
    w: number
  }
  
  export interface N56 {
    sizes: Sizes46
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes46 {
    "100": N10046
    "400": N40046
    full: Full46
  }
  
  export interface N10046 {
    h: number
    w: number
  }
  
  export interface N40046 {
    h: number
    w: number
  }
  
  export interface Full46 {
    h: number
    w: number
  }
  
  export interface N57 {
    sizes: Sizes47
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes47 {
    "100": N10047
    "400": N40047
    full: Full47
  }
  
  export interface N10047 {
    h: number
    w: number
  }
  
  export interface N40047 {
    h: number
    w: number
  }
  
  export interface Full47 {
    h: number
    w: number
  }
  
  export interface N58 {
    sizes: Sizes48
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes48 {
    "100": N10048
    "400": N40048
    full: Full48
  }
  
  export interface N10048 {
    h: number
    w: number
  }
  
  export interface N40048 {
    h: number
    w: number
  }
  
  export interface Full48 {
    h: number
    w: number
  }
  
  export interface N6 {
    sizes: Sizes49
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes49 {
    "100": N10049
    "400": N40049
    full: Full49
  }
  
  export interface N10049 {
    h: number
    w: number
  }
  
  export interface N40049 {
    h: number
    w: number
  }
  
  export interface Full49 {
    h: number
    w: number
  }
  
  export interface N61 {
    sizes: Sizes50
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes50 {
    "100": N10050
    "400": N40050
    full: Full50
  }
  
  export interface N10050 {
    h: number
    w: number
  }
  
  export interface N40050 {
    h: number
    w: number
  }
  
  export interface Full50 {
    h: number
    w: number
  }
  
  export interface N62 {
    sizes: Sizes51
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes51 {
    "100": N10051
    "400": N40051
    full: Full51
  }
  
  export interface N10051 {
    h: number
    w: number
  }
  
  export interface N40051 {
    h: number
    w: number
  }
  
  export interface Full51 {
    h: number
    w: number
  }
  
  export interface N63 {
    sizes: Sizes52
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes52 {
    "100": N10052
    "400": N40052
    full: Full52
  }
  
  export interface N10052 {
    h: number
    w: number
  }
  
  export interface N40052 {
    h: number
    w: number
  }
  
  export interface Full52 {
    h: number
    w: number
  }
  
  export interface N64 {
    sizes: Sizes53
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes53 {
    "100": N10053
    "400": N40053
    full: Full53
  }
  
  export interface N10053 {
    h: number
    w: number
  }
  
  export interface N40053 {
    h: number
    w: number
  }
  
  export interface Full53 {
    h: number
    w: number
  }
  
  export interface N65 {
    sizes: Sizes54
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes54 {
    "100": N10054
    "400": N40054
    full: Full54
  }
  
  export interface N10054 {
    h: number
    w: number
  }
  
  export interface N40054 {
    h: number
    w: number
  }
  
  export interface Full54 {
    h: number
    w: number
  }
  
  export interface N66 {
    sizes: Sizes55
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes55 {
    "100": N10055
    "400": N40055
    full: Full55
  }
  
  export interface N10055 {
    h: number
    w: number
  }
  
  export interface N40055 {
    h: number
    w: number
  }
  
  export interface Full55 {
    h: number
    w: number
  }
  
  export interface N67 {
    sizes: Sizes56
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes56 {
    "100": N10056
    "400": N40056
    full: Full56
  }
  
  export interface N10056 {
    h: number
    w: number
  }
  
  export interface N40056 {
    h: number
    w: number
  }
  
  export interface Full56 {
    h: number
    w: number
  }
  
  export interface N68 {
    sizes: Sizes57
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes57 {
    "100": N10057
    "400": N40057
    full: Full57
  }
  
  export interface N10057 {
    h: number
    w: number
  }
  
  export interface N40057 {
    h: number
    w: number
  }
  
  export interface Full57 {
    h: number
    w: number
  }
  
  export interface N69 {
    sizes: Sizes58
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes58 {
    "100": N10058
    "400": N40058
    full: Full58
  }
  
  export interface N10058 {
    h: number
    w: number
  }
  
  export interface N40058 {
    h: number
    w: number
  }
  
  export interface Full58 {
    h: number
    w: number
  }
  
  export interface N7 {
    sizes: Sizes59
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes59 {
    "100": N10059
    "400": N40059
    full: Full59
  }
  
  export interface N10059 {
    h: number
    w: number
  }
  
  export interface N40059 {
    h: number
    w: number
  }
  
  export interface Full59 {
    h: number
    w: number
  }
  
  export interface N70 {
    sizes: Sizes60
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes60 {
    "100": N10060
    "400": N40060
    full: Full60
  }
  
  export interface N10060 {
    h: number
    w: number
  }
  
  export interface N40060 {
    h: number
    w: number
  }
  
  export interface Full60 {
    h: number
    w: number
  }
  
  export interface N71 {
    sizes: Sizes61
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes61 {
    "100": N10061
    "400": N40061
    full: Full61
  }
  
  export interface N10061 {
    h: number
    w: number
  }
  
  export interface N40061 {
    h: number
    w: number
  }
  
  export interface Full61 {
    h: number
    w: number
  }
  
  export interface N72 {
    sizes: Sizes62
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes62 {
    "100": N10062
    "400": N40062
    full: Full62
  }
  
  export interface N10062 {
    h: number
    w: number
  }
  
  export interface N40062 {
    h: number
    w: number
  }
  
  export interface Full62 {
    h: number
    w: number
  }
  
  export interface N73 {
    sizes: Sizes63
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes63 {
    "100": N10063
    "400": N40063
    full: Full63
  }
  
  export interface N10063 {
    h: number
    w: number
  }
  
  export interface N40063 {
    h: number
    w: number
  }
  
  export interface Full63 {
    h: number
    w: number
  }
  
  export interface N74 {
    sizes: Sizes64
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes64 {
    "100": N10064
    "400": N40064
    full: Full64
  }
  
  export interface N10064 {
    h: number
    w: number
  }
  
  export interface N40064 {
    h: number
    w: number
  }
  
  export interface Full64 {
    h: number
    w: number
  }
  
  export interface N75 {
    sizes: Sizes65
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes65 {
    "100": N10065
    "400": N40065
    full: Full65
  }
  
  export interface N10065 {
    h: number
    w: number
  }
  
  export interface N40065 {
    h: number
    w: number
  }
  
  export interface Full65 {
    h: number
    w: number
  }
  
  export interface N76 {
    sizes: Sizes66
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes66 {
    "100": N10066
    "400": N40066
    full: Full66
  }
  
  export interface N10066 {
    h: number
    w: number
  }
  
  export interface N40066 {
    h: number
    w: number
  }
  
  export interface Full66 {
    h: number
    w: number
  }
  
  export interface N77 {
    sizes: Sizes67
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes67 {
    "100": N10067
    "400": N40067
    full: Full67
  }
  
  export interface N10067 {
    h: number
    w: number
  }
  
  export interface N40067 {
    h: number
    w: number
  }
  
  export interface Full67 {
    h: number
    w: number
  }
  
  export interface N78 {
    sizes: Sizes68
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes68 {
    "100": N10068
    "400": N40068
    full: Full68
  }
  
  export interface N10068 {
    h: number
    w: number
  }
  
  export interface N40068 {
    h: number
    w: number
  }
  
  export interface Full68 {
    h: number
    w: number
  }
  
  export interface N8 {
    sizes: Sizes69
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes69 {
    "100": N10069
    "400": N40069
    full: Full69
  }
  
  export interface N10069 {
    h: number
    w: number
  }
  
  export interface N40069 {
    h: number
    w: number
  }
  
  export interface Full69 {
    h: number
    w: number
  }
  
  export interface N82 {
    sizes: Sizes70
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes70 {
    "100": N10070
    "400": N40070
    full: Full70
  }
  
  export interface N10070 {
    h: number
    w: number
  }
  
  export interface N40070 {
    h: number
    w: number
  }
  
  export interface Full70 {
    h: number
    w: number
  }
  
  export interface N83 {
    sizes: Sizes71
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes71 {
    "100": N10071
    "400": N40071
    full: Full71
  }
  
  export interface N10071 {
    h: number
    w: number
  }
  
  export interface N40071 {
    h: number
    w: number
  }
  
  export interface Full71 {
    h: number
    w: number
  }
  
  export interface N84 {
    sizes: Sizes72
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes72 {
    "100": N10072
    "400": N40072
    full: Full72
  }
  
  export interface N10072 {
    h: number
    w: number
  }
  
  export interface N40072 {
    h: number
    w: number
  }
  
  export interface Full72 {
    h: number
    w: number
  }
  
  export interface N85 {
    sizes: Sizes73
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes73 {
    "100": N10073
    "400": N40073
    full: Full73
  }
  
  export interface N10073 {
    h: number
    w: number
  }
  
  export interface N40073 {
    h: number
    w: number
  }
  
  export interface Full73 {
    h: number
    w: number
  }
  
  export interface N86 {
    sizes: Sizes74
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes74 {
    "100": N10074
    "400": N40074
    full: Full74
  }
  
  export interface N10074 {
    h: number
    w: number
  }
  
  export interface N40074 {
    h: number
    w: number
  }
  
  export interface Full74 {
    h: number
    w: number
  }
  
  export interface N87 {
    sizes: Sizes75
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes75 {
    "100": N10075
    "400": N40075
    full: Full75
  }
  
  export interface N10075 {
    h: number
    w: number
  }
  
  export interface N40075 {
    h: number
    w: number
  }
  
  export interface Full75 {
    h: number
    w: number
  }
  
  export interface N88 {
    sizes: Sizes76
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes76 {
    "100": N10076
    "400": N40076
    full: Full76
  }
  
  export interface N10076 {
    h: number
    w: number
  }
  
  export interface N40076 {
    h: number
    w: number
  }
  
  export interface Full76 {
    h: number
    w: number
  }
  
  export interface N89 {
    sizes: Sizes77
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes77 {
    "100": N10077
    "400": N40077
    full: Full77
  }
  
  export interface N10077 {
    h: number
    w: number
  }
  
  export interface N40077 {
    h: number
    w: number
  }
  
  export interface Full77 {
    h: number
    w: number
  }
  
  export interface N9 {
    sizes: Sizes78
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes78 {
    "100": N10078
    "400": N40078
    full: Full78
  }
  
  export interface N10078 {
    h: number
    w: number
  }
  
  export interface N40078 {
    h: number
    w: number
  }
  
  export interface Full78 {
    h: number
    w: number
  }
  
  export interface N90 {
    sizes: Sizes79
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes79 {
    "100": N10079
    "400": N40079
    full: Full79
  }
  
  export interface N10079 {
    h: number
    w: number
  }
  
  export interface N40079 {
    h: number
    w: number
  }
  
  export interface Full79 {
    h: number
    w: number
  }
  
  export interface N91 {
    sizes: Sizes80
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes80 {
    "100": N10080
    "400": N40080
    full: Full80
  }
  
  export interface N10080 {
    h: number
    w: number
  }
  
  export interface N40080 {
    h: number
    w: number
  }
  
  export interface Full80 {
    h: number
    w: number
  }
  
  export interface N92 {
    sizes: Sizes81
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes81 {
    "100": N10081
    "400": N40081
    full: Full81
  }
  
  export interface N10081 {
    h: number
    w: number
  }
  
  export interface N40081 {
    h: number
    w: number
  }
  
  export interface Full81 {
    h: number
    w: number
  }
  
  export interface N93 {
    sizes: Sizes82
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes82 {
    "100": N10082
    "400": N40082
    full: Full82
  }
  
  export interface N10082 {
    h: number
    w: number
  }
  
  export interface N40082 {
    h: number
    w: number
  }
  
  export interface Full82 {
    h: number
    w: number
  }
  
  export interface N94 {
    sizes: Sizes83
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes83 {
    "100": N10083
    "400": N40083
    full: Full83
  }
  
  export interface N10083 {
    h: number
    w: number
  }
  
  export interface N40083 {
    h: number
    w: number
  }
  
  export interface Full83 {
    h: number
    w: number
  }
  
  export interface N95 {
    sizes: Sizes84
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes84 {
    "100": N10084
    "400": N40084
    full: Full84
  }
  
  export interface N10084 {
    h: number
    w: number
  }
  
  export interface N40084 {
    h: number
    w: number
  }
  
  export interface Full84 {
    h: number
    w: number
  }
  
  export interface N96 {
    sizes: Sizes85
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes85 {
    "100": N10085
    "400": N40085
    full: Full85
  }
  
  export interface N10085 {
    h: number
    w: number
  }
  
  export interface N40085 {
    h: number
    w: number
  }
  
  export interface Full85 {
    h: number
    w: number
  }
  
  export interface FrontBg {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes86
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes86 {
    "100": N10086
    "200": N200
    "400": N40086
    full: Full86
  }
  
  export interface N10086 {
    h: number
    w: number
  }
  
  export interface N200 {
    h: number
    w: number
  }
  
  export interface N40086 {
    h: number
    w: number
  }
  
  export interface Full86 {
    h: number
    w: number
  }
  
  export interface FrontDe {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes87
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes87 {
    "100": N10087
    "200": N2002
    "400": N40087
    full: Full87
  }
  
  export interface N10087 {
    h: number
    w: number
  }
  
  export interface N2002 {
    h: number
    w: number
  }
  
  export interface N40087 {
    h: number
    w: number
  }
  
  export interface Full87 {
    h: number
    w: number
  }
  
  export interface FrontEn {
    angle: number
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes88
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes88 {
    "100": N10088
    "200": N2003
    "400": N40088
    full: Full88
  }
  
  export interface N10088 {
    h: number
    w: number
  }
  
  export interface N2003 {
    h: number
    w: number
  }
  
  export interface N40088 {
    h: number
    w: number
  }
  
  export interface Full88 {
    h: number
    w: number
  }
  
  export interface FrontEs {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes89
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes89 {
    "100": N10089
    "200": N2004
    "400": N40089
    full: Full89
  }
  
  export interface N10089 {
    h: number
    w: number
  }
  
  export interface N2004 {
    h: number
    w: number
  }
  
  export interface N40089 {
    h: number
    w: number
  }
  
  export interface Full89 {
    h: number
    w: number
  }
  
  export interface FrontFr {
    angle: number
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes90
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes90 {
    "100": N10090
    "200": N2005
    "400": N40090
    full: Full90
  }
  
  export interface N10090 {
    h: number
    w: number
  }
  
  export interface N2005 {
    h: number
    w: number
  }
  
  export interface N40090 {
    h: number
    w: number
  }
  
  export interface Full90 {
    h: number
    w: number
  }
  
  export interface FrontIt {
    angle: any
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes91
    white_magic?: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes91 {
    "100": N10091
    "200": N2006
    "400": N40091
    full: Full91
  }
  
  export interface N10091 {
    h: number
    w: number
  }
  
  export interface N2006 {
    h: number
    w: number
  }
  
  export interface N40091 {
    h: number
    w: number
  }
  
  export interface Full91 {
    h: number
    w: number
  }
  
  export interface FrontRu {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes92
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes92 {
    "100": N10092
    "200": N2007
    "400": N40092
    full: Full92
  }
  
  export interface N10092 {
    h: number
    w: number
  }
  
  export interface N2007 {
    h: number
    w: number
  }
  
  export interface N40092 {
    h: number
    w: number
  }
  
  export interface Full92 {
    h: number
    w: number
  }
  
  export interface FrontSr {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes93
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes93 {
    "100": N10093
    "200": N2008
    "400": N40093
    full: Full93
  }
  
  export interface N10093 {
    h: number
    w: number
  }
  
  export interface N2008 {
    h: number
    w: number
  }
  
  export interface N40093 {
    h: number
    w: number
  }
  
  export interface Full93 {
    h: number
    w: number
  }
  
  export interface IngredientsDe {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes94
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes94 {
    "100": N10094
    "200": N2009
    "400": N40094
    full: Full94
  }
  
  export interface N10094 {
    h: number
    w: number
  }
  
  export interface N2009 {
    h: number
    w: number
  }
  
  export interface N40094 {
    h: number
    w: number
  }
  
  export interface Full94 {
    h: number
    w: number
  }
  
  export interface IngredientsEn {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes95
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes95 {
    "100": N10095
    "200": N20010
    "400": N40095
    full: Full95
  }
  
  export interface N10095 {
    h: number
    w: number
  }
  
  export interface N20010 {
    h: number
    w: number
  }
  
  export interface N40095 {
    h: number
    w: number
  }
  
  export interface Full95 {
    h: number
    w: number
  }
  
  export interface IngredientsFr {
    angle?: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes96
    white_magic?: string
    x1?: string
    x2?: string
    y1?: string
    y2?: string
  }
  
  export interface Sizes96 {
    "100": N10096
    "200": N20011
    "400": N40096
    full: Full96
  }
  
  export interface N10096 {
    h: number
    w: number
  }
  
  export interface N20011 {
    h: number
    w: number
  }
  
  export interface N40096 {
    h: number
    w: number
  }
  
  export interface Full96 {
    h: number
    w: number
  }
  
  export interface IngredientsHr {
    angle: number
    coordinates_image_size?: string
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes97
    white_magic: any
    x1: any
    x2: any
    y1: any
    y2: any
    ocr?: number
    orientation?: string
  }
  
  export interface Sizes97 {
    "100": N10097
    "200": N20012
    "400": N40097
    full: Full97
  }
  
  export interface N10097 {
    h: number
    w: number
  }
  
  export interface N20012 {
    h: number
    w: number
  }
  
  export interface N40097 {
    h: number
    w: number
  }
  
  export interface Full97 {
    h: number
    w: number
  }
  
  export interface IngredientsIt {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes98
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes98 {
    "100": N10098
    "200": N20013
    "400": N40098
    full: Full98
  }
  
  export interface N10098 {
    h: number
    w: number
  }
  
  export interface N20013 {
    h: number
    w: number
  }
  
  export interface N40098 {
    h: number
    w: number
  }
  
  export interface Full98 {
    h: number
    w: number
  }
  
  export interface IngredientsRu {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    ocr: number
    orientation: string
    rev: string
    sizes: Sizes99
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes99 {
    "100": N10099
    "200": N20014
    "400": N40099
    full: Full99
  }
  
  export interface N10099 {
    h: number
    w: number
  }
  
  export interface N20014 {
    h: number
    w: number
  }
  
  export interface N40099 {
    h: number
    w: number
  }
  
  export interface Full99 {
    h: number
    w: number
  }
  
  export interface IngredientsSr {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    ocr: number
    orientation: string
    rev: string
    sizes: Sizes100
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes100 {
    "100": N100100
    "200": N20015
    "400": N400100
    full: Full100
  }
  
  export interface N100100 {
    h: number
    w: number
  }
  
  export interface N20015 {
    h: number
    w: number
  }
  
  export interface N400100 {
    h: number
    w: number
  }
  
  export interface Full100 {
    h: number
    w: number
  }
  
  export interface NutritionDe {
    angle: any
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes101
    white_magic?: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes101 {
    "100": N100101
    "200": N20016
    "400": N400101
    full: Full101
  }
  
  export interface N100101 {
    h: number
    w: number
  }
  
  export interface N20016 {
    h: number
    w: number
  }
  
  export interface N400101 {
    h: number
    w: number
  }
  
  export interface Full101 {
    h: number
    w: number
  }
  
  export interface NutritionEn {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes102
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes102 {
    "100": N100102
    "200": N20017
    "400": N400102
    full: Full102
  }
  
  export interface N100102 {
    h: number
    w: number
  }
  
  export interface N20017 {
    h: number
    w: number
  }
  
  export interface N400102 {
    h: number
    w: number
  }
  
  export interface Full102 {
    h: number
    w: number
  }
  
  export interface NutritionFr {
    angle: any
    geometry: string
    imgid: string
    normalize: string
    ocr: number
    orientation: string
    rev: string
    sizes: Sizes103
    white_magic: string
    x1: any
    x2: any
    y1: any
    y2: any
  }
  
  export interface Sizes103 {
    "100": N100103
    "200": N20018
    "400": N400103
    full: Full103
  }
  
  export interface N100103 {
    h: number
    w: number
  }
  
  export interface N20018 {
    h: number
    w: number
  }
  
  export interface N400103 {
    h: number
    w: number
  }
  
  export interface Full103 {
    h: number
    w: number
  }
  
  export interface NutritionIt {
    angle: any
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes104
    white_magic?: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes104 {
    "100": N100104
    "200": N20019
    "400": N400104
    full: Full104
  }
  
  export interface N100104 {
    h: number
    w: number
  }
  
  export interface N20019 {
    h: number
    w: number
  }
  
  export interface N400104 {
    h: number
    w: number
  }
  
  export interface Full104 {
    h: number
    w: number
  }
  
  export interface NutritionRu {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    ocr: number
    orientation: any
    rev: string
    sizes: Sizes105
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes105 {
    "100": N100105
    "200": N20020
    "400": N400105
    full: Full105
  }
  
  export interface N100105 {
    h: number
    w: number
  }
  
  export interface N20020 {
    h: number
    w: number
  }
  
  export interface N400105 {
    h: number
    w: number
  }
  
  export interface Full105 {
    h: number
    w: number
  }
  
  export interface NutritionSr {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes106
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes106 {
    "100": N100106
    "200": N20021
    "400": N400106
    full: Full106
  }
  
  export interface N100106 {
    h: number
    w: number
  }
  
  export interface N20021 {
    h: number
    w: number
  }
  
  export interface N400106 {
    h: number
    w: number
  }
  
  export interface Full106 {
    h: number
    w: number
  }
  
  export interface PackagingEn {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes107
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes107 {
    "100": N100107
    "200": N20022
    "400": N400107
    full: Full107
  }
  
  export interface N100107 {
    h: number
    w: number
  }
  
  export interface N20022 {
    h: number
    w: number
  }
  
  export interface N400107 {
    h: number
    w: number
  }
  
  export interface Full107 {
    h: number
    w: number
  }
  
  export interface PackagingFr {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes108
    white_magic?: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes108 {
    "100": N100108
    "200": N20023
    "400": N400108
    full: Full108
  }
  
  export interface N100108 {
    h: number
    w: number
  }
  
  export interface N20023 {
    h: number
    w: number
  }
  
  export interface N400108 {
    h: number
    w: number
  }
  
  export interface Full108 {
    h: number
    w: number
  }
  
  export interface PackagingIt {
    angle: any
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes109
    white_magic: any
    x1: any
    x2: any
    y1: any
    y2: any
  }
  
  export interface Sizes109 {
    "100": N100109
    "200": N20024
    "400": N400109
    full: Full109
  }
  
  export interface N100109 {
    h: number
    w: number
  }
  
  export interface N20024 {
    h: number
    w: number
  }
  
  export interface N400109 {
    h: number
    w: number
  }
  
  export interface Full109 {
    h: number
    w: number
  }
  
  export interface N22 {
    sizes: Sizes110
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes110 {
    "100": N100110
    "400": N400110
    full: Full110
  }
  
  export interface N100110 {
    h: number
    w: number
  }
  
  export interface N400110 {
    h: number
    w: number
  }
  
  export interface Full110 {
    h: number
    w: number
  }
  
  export interface N23 {
    sizes: Sizes111
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes111 {
    "100": N100111
    "400": N400111
    full: Full111
  }
  
  export interface N100111 {
    h: number
    w: number
  }
  
  export interface N400111 {
    h: number
    w: number
  }
  
  export interface Full111 {
    h: number
    w: number
  }
  
  export interface N37 {
    sizes: Sizes112
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes112 {
    "100": N100112
    "400": N400112
    full: Full112
  }
  
  export interface N100112 {
    h: number
    w: number
  }
  
  export interface N400112 {
    h: number
    w: number
  }
  
  export interface Full112 {
    h: number
    w: number
  }
  
  export interface N49 {
    sizes: Sizes113
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes113 {
    "100": N100113
    "400": N400113
    full: Full113
  }
  
  export interface N100113 {
    h: number
    w: number
  }
  
  export interface N400113 {
    h: number
    w: number
  }
  
  export interface Full113 {
    h: number
    w: number
  }
  
  export interface N50 {
    sizes: Sizes114
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes114 {
    "100": N100114
    "400": N400114
    full: Full114
  }
  
  export interface N100114 {
    h: number
    w: number
  }
  
  export interface N400114 {
    h: number
    w: number
  }
  
  export interface Full114 {
    h: number
    w: number
  }
  
  export interface N53 {
    sizes: Sizes115
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes115 {
    "100": N100115
    "400": N400115
    full: Full115
  }
  
  export interface N100115 {
    h: number
    w: number
  }
  
  export interface N400115 {
    h: number
    w: number
  }
  
  export interface Full115 {
    h: number
    w: number
  }
  
  export interface N59 {
    sizes: Sizes116
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes116 {
    "100": N100116
    "400": N400116
    full: Full116
  }
  
  export interface N100116 {
    h: number
    w: number
  }
  
  export interface N400116 {
    h: number
    w: number
  }
  
  export interface Full116 {
    h: number
    w: number
  }
  
  export interface N60 {
    sizes: Sizes117
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes117 {
    "100": N100117
    "400": N400117
    full: Full117
  }
  
  export interface N100117 {
    h: number
    w: number
  }
  
  export interface N400117 {
    h: number
    w: number
  }
  
  export interface Full117 {
    h: number
    w: number
  }
  
  export interface Front {
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes118
    white_magic: any
  }
  
  export interface Sizes118 {
    "100": N100118
    "200": N20025
    "400": N400118
    full: Full118
  }
  
  export interface N100118 {
    h: number
    w: number
  }
  
  export interface N20025 {
    h: number
    w: number
  }
  
  export interface N400118 {
    h: number
    w: number
  }
  
  export interface Full118 {
    h: number
    w: number
  }
  
  export interface FrontDa {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes119
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes119 {
    "100": N100119
    "200": N20026
    "400": N400119
    full: Full119
  }
  
  export interface N100119 {
    h: number
    w: number
  }
  
  export interface N20026 {
    h: number
    w: number
  }
  
  export interface N400119 {
    h: number
    w: number
  }
  
  export interface Full119 {
    h: number
    w: number
  }
  
  export interface FrontFi {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes120
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes120 {
    "100": N100120
    "200": N20027
    "400": N400120
    full: Full120
  }
  
  export interface N100120 {
    h: number
    w: number
  }
  
  export interface N20027 {
    h: number
    w: number
  }
  
  export interface N400120 {
    h: number
    w: number
  }
  
  export interface Full120 {
    h: number
    w: number
  }
  
  export interface FrontHu {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes121
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes121 {
    "100": N100121
    "200": N20028
    "400": N400121
    full: Full121
  }
  
  export interface N100121 {
    h: number
    w: number
  }
  
  export interface N20028 {
    h: number
    w: number
  }
  
  export interface N400121 {
    h: number
    w: number
  }
  
  export interface Full121 {
    h: number
    w: number
  }
  
  export interface FrontNl {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes122
    white_magic: any
    x1: number
    x2: number
    y1: number
    y2: number
  }
  
  export interface Sizes122 {
    "100": N100122
    "200": N20029
    "400": N400122
    full: Full122
  }
  
  export interface N100122 {
    h: number
    w: number
  }
  
  export interface N20029 {
    h: number
    w: number
  }
  
  export interface N400122 {
    h: number
    w: number
  }
  
  export interface Full122 {
    h: number
    w: number
  }
  
  export interface FrontNo {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes123
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes123 {
    "100": N100123
    "200": N20030
    "400": N400123
    full: Full123
  }
  
  export interface N100123 {
    h: number
    w: number
  }
  
  export interface N20030 {
    h: number
    w: number
  }
  
  export interface N400123 {
    h: number
    w: number
  }
  
  export interface Full123 {
    h: number
    w: number
  }
  
  export interface FrontSv {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes124
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes124 {
    "100": N100124
    "200": N20031
    "400": N400124
    full: Full124
  }
  
  export interface N100124 {
    h: number
    w: number
  }
  
  export interface N20031 {
    h: number
    w: number
  }
  
  export interface N400124 {
    h: number
    w: number
  }
  
  export interface Full124 {
    h: number
    w: number
  }
  
  export interface Ingredients {
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes125
    white_magic: any
  }
  
  export interface Sizes125 {
    "100": N100125
    "200": N20032
    "400": N400125
    full: Full125
  }
  
  export interface N100125 {
    h: number
    w: number
  }
  
  export interface N20032 {
    h: number
    w: number
  }
  
  export interface N400125 {
    h: number
    w: number
  }
  
  export interface Full125 {
    h: number
    w: number
  }
  
  export interface IngredientsDa {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes126
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes126 {
    "100": N100126
    "200": N20033
    "400": N400126
    full: Full126
  }
  
  export interface N100126 {
    h: number
    w: number
  }
  
  export interface N20033 {
    h: number
    w: number
  }
  
  export interface N400126 {
    h: number
    w: number
  }
  
  export interface Full126 {
    h: number
    w: number
  }
  
  export interface IngredientsEl {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    ocr: number
    orientation: any
    rev: string
    sizes: Sizes127
    white_magic: any
    x1: number
    x2: number
    y1: number
    y2: number
  }
  
  export interface Sizes127 {
    "100": N100127
    "200": N20034
    "400": N400127
    full: Full127
  }
  
  export interface N100127 {
    h: number
    w: number
  }
  
  export interface N20034 {
    h: number
    w: number
  }
  
  export interface N400127 {
    h: number
    w: number
  }
  
  export interface Full127 {
    h: number
    w: number
  }
  
  export interface IngredientsFi {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes128
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes128 {
    "100": N100128
    "200": N20035
    "400": N400128
    full: Full128
  }
  
  export interface N100128 {
    h: number
    w: number
  }
  
  export interface N20035 {
    h: number
    w: number
  }
  
  export interface N400128 {
    h: number
    w: number
  }
  
  export interface Full128 {
    h: number
    w: number
  }
  
  export interface IngredientsHu {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    ocr: number
    orientation: string
    rev: string
    sizes: Sizes129
    white_magic: any
    x1: number
    x2: number
    y1: number
    y2: number
  }
  
  export interface Sizes129 {
    "100": N100129
    "200": N20036
    "400": N400129
    full: Full129
  }
  
  export interface N100129 {
    h: number
    w: number
  }
  
  export interface N20036 {
    h: number
    w: number
  }
  
  export interface N400129 {
    h: number
    w: number
  }
  
  export interface Full129 {
    h: number
    w: number
  }
  
  export interface IngredientsNl {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    ocr: number
    orientation: string
    rev: string
    sizes: Sizes130
    white_magic: any
    x1: number
    x2: number
    y1: number
    y2: number
  }
  
  export interface Sizes130 {
    "100": N100130
    "200": N20037
    "400": N400130
    full: Full130
  }
  
  export interface N100130 {
    h: number
    w: number
  }
  
  export interface N20037 {
    h: number
    w: number
  }
  
  export interface N400130 {
    h: number
    w: number
  }
  
  export interface Full130 {
    h: number
    w: number
  }
  
  export interface IngredientsNo {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes131
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes131 {
    "100": N100131
    "200": N20038
    "400": N400131
    full: Full131
  }
  
  export interface N100131 {
    h: number
    w: number
  }
  
  export interface N20038 {
    h: number
    w: number
  }
  
  export interface N400131 {
    h: number
    w: number
  }
  
  export interface Full131 {
    h: number
    w: number
  }
  
  export interface IngredientsSl {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    ocr: number
    orientation: string
    rev: string
    sizes: Sizes132
    white_magic: any
    x1: number
    x2: number
    y1: number
    y2: number
  }
  
  export interface Sizes132 {
    "100": N100132
    "200": N20039
    "400": N400132
    full: Full132
  }
  
  export interface N100132 {
    h: number
    w: number
  }
  
  export interface N20039 {
    h: number
    w: number
  }
  
  export interface N400132 {
    h: number
    w: number
  }
  
  export interface Full132 {
    h: number
    w: number
  }
  
  export interface IngredientsSv {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes133
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes133 {
    "100": N100133
    "200": N20040
    "400": N400133
    full: Full133
  }
  
  export interface N100133 {
    h: number
    w: number
  }
  
  export interface N20040 {
    h: number
    w: number
  }
  
  export interface N400133 {
    h: number
    w: number
  }
  
  export interface Full133 {
    h: number
    w: number
  }
  
  export interface Nutrition3 {
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes134
    white_magic: string
  }
  
  export interface Sizes134 {
    "100": N100134
    "200": N20041
    "400": N400134
    full: Full134
  }
  
  export interface N100134 {
    h: number
    w: number
  }
  
  export interface N20041 {
    h: number
    w: number
  }
  
  export interface N400134 {
    h: number
    w: number
  }
  
  export interface Full134 {
    h: number
    w: number
  }
  
  export interface NutritionDa {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes135
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes135 {
    "100": N100135
    "200": N20042
    "400": N400135
    full: Full135
  }
  
  export interface N100135 {
    h: number
    w: number
  }
  
  export interface N20042 {
    h: number
    w: number
  }
  
  export interface N400135 {
    h: number
    w: number
  }
  
  export interface Full135 {
    h: number
    w: number
  }
  
  export interface NutritionFi {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes136
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes136 {
    "100": N100136
    "200": N20043
    "400": N400136
    full: Full136
  }
  
  export interface N100136 {
    h: number
    w: number
  }
  
  export interface N20043 {
    h: number
    w: number
  }
  
  export interface N400136 {
    h: number
    w: number
  }
  
  export interface Full136 {
    h: number
    w: number
  }
  
  export interface NutritionNo {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes137
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes137 {
    "100": N100137
    "200": N20044
    "400": N400137
    full: Full137
  }
  
  export interface N100137 {
    h: number
    w: number
  }
  
  export interface N20044 {
    h: number
    w: number
  }
  
  export interface N400137 {
    h: number
    w: number
  }
  
  export interface Full137 {
    h: number
    w: number
  }
  
  export interface NutritionSv {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes138
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes138 {
    "100": N100138
    "200": N20045
    "400": N400138
    full: Full138
  }
  
  export interface N100138 {
    h: number
    w: number
  }
  
  export interface N20045 {
    h: number
    w: number
  }
  
  export interface N400138 {
    h: number
    w: number
  }
  
  export interface Full138 {
    h: number
    w: number
  }
  
  export interface PackagingDa {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes139
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes139 {
    "100": N100139
    "200": N20046
    "400": N400139
    full: Full139
  }
  
  export interface N100139 {
    h: number
    w: number
  }
  
  export interface N20046 {
    h: number
    w: number
  }
  
  export interface N400139 {
    h: number
    w: number
  }
  
  export interface Full139 {
    h: number
    w: number
  }
  
  export interface PackagingDe {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes140
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes140 {
    "100": N100140
    "200": N20047
    "400": N400140
    full: Full140
  }
  
  export interface N100140 {
    h: number
    w: number
  }
  
  export interface N20047 {
    h: number
    w: number
  }
  
  export interface N400140 {
    h: number
    w: number
  }
  
  export interface Full140 {
    h: number
    w: number
  }
  
  export interface PackagingFi {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes141
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes141 {
    "100": N100141
    "200": N20048
    "400": N400141
    full: Full141
  }
  
  export interface N100141 {
    h: number
    w: number
  }
  
  export interface N20048 {
    h: number
    w: number
  }
  
  export interface N400141 {
    h: number
    w: number
  }
  
  export interface Full141 {
    h: number
    w: number
  }
  
  export interface PackagingNo {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes142
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes142 {
    "100": N100142
    "200": N20049
    "400": N400142
    full: Full142
  }
  
  export interface N100142 {
    h: number
    w: number
  }
  
  export interface N20049 {
    h: number
    w: number
  }
  
  export interface N400142 {
    h: number
    w: number
  }
  
  export interface Full142 {
    h: number
    w: number
  }
  
  export interface PackagingSv {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes143
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes143 {
    "100": N100143
    "200": N20050
    "400": N400143
    full: Full143
  }
  
  export interface N100143 {
    h: number
    w: number
  }
  
  export interface N20050 {
    h: number
    w: number
  }
  
  export interface N400143 {
    h: number
    w: number
  }
  
  export interface Full143 {
    h: number
    w: number
  }
  
  export interface Ingredient {
    ciqual_food_code?: string
    ecobalyse_code?: string
    id: string
    is_in_taxonomy: number
    percent_estimate: any
    percent_max: any
    percent_min: any
    rank: number
    text: string
    vegan?: string
    vegetarian?: string
    percent?: number
  }
  
  export interface IngredientsAnalysis {
    "en:palm-oil-content-unknown"?: string[]
    "en:vegan-status-unknown"?: string[]
    "en:vegetarian-status-unknown"?: string[]
  }
  
  export interface Languages {
    "en:bulgarian"?: number
    "en:croatian": number
    "en:english": number
    "en:french": number
    "en:german": number
    "en:italian": number
    "en:japanese"?: number
    "en:russian"?: number
    "en:serbian"?: number
    "en:slovak"?: number
    "en:spanish": number
    "en:danish"?: number
    "en:dutch"?: number
    "en:finnish"?: number
    "en:greek"?: number
    "en:hungarian"?: number
    "en:norwegian"?: number
    "en:slovene"?: number
    "en:swedish"?: number
  }
  
  export interface LanguagesCodes {
    bg?: number
    de: number
    en: number
    es: number
    fr: number
    hr: number
    it: number
    ja?: number
    ru?: number
    sk?: number
    sr?: number
    da?: number
    el?: number
    fi?: number
    hu?: number
    nl?: number
    no?: number
    sl?: number
    sv?: number
  }
  
  export interface NovaGroupsMarkers {}
  
  export interface NutrientLevels {
    fat: string
    salt: string
    "saturated-fat": string
    sugars: string
  }
  
  export interface Nutriments {
    carbohydrates: number
    carbohydrates_100g: number
    carbohydrates_serving: string
    carbohydrates_unit: string
    carbohydrates_value: number
    energy: number
    "energy-kcal": number
    "energy-kcal_100g": number
    "energy-kcal_serving": number
    "energy-kcal_unit": string
    "energy-kcal_value": number
    "energy-kcal_value_computed": any
    "energy-kj": number
    "energy-kj_100g": number
    "energy-kj_serving": number
    "energy-kj_unit": string
    "energy-kj_value": number
    "energy-kj_value_computed": any
    energy_100g: number
    energy_serving: number
    energy_unit: string
    energy_value: number
    fat: any
    fat_100g: any
    fat_serving: any
    fat_unit: string
    fat_value: any
    fiber: number
    fiber_100g: number
    fiber_serving: string
    fiber_unit: string
    fiber_value: number
    "fruits-vegetables-legumes-estimate-from-ingredients_100g": number
    "fruits-vegetables-legumes-estimate-from-ingredients_serving": number
    "fruits-vegetables-nuts"?: number
    "fruits-vegetables-nuts-estimate-from-ingredients_100g": number
    "fruits-vegetables-nuts-estimate-from-ingredients_serving": number
    "fruits-vegetables-nuts_100g"?: number
    "fruits-vegetables-nuts_serving"?: number
    "fruits-vegetables-nuts_unit"?: string
    "fruits-vegetables-nuts_value"?: number
    "nova-group": number
    "nova-group_100g": number
    "nova-group_serving": number
    "nutrition-score-fr": number
    "nutrition-score-fr_100g": number
    proteins: number
    proteins_100g: number
    proteins_serving: string
    proteins_unit: string
    proteins_value: number
    salt: string
    salt_100g: string
    salt_serving: string
    salt_unit: string
    salt_value: string
    "saturated-fat": string
    "saturated-fat_100g": string
    "saturated-fat_serving": string
    "saturated-fat_unit": string
    "saturated-fat_value": string
    sodium: string
    sodium_100g: string
    sodium_serving: string
    sodium_unit: string
    sodium_value: string
    sugars: string
    sugars_100g: string
    sugars_serving: string
    sugars_unit: string
    sugars_value: string
    iron?: string
    iron_100g?: string
    iron_label?: string
    iron_serving?: string
    iron_unit?: string
    iron_value?: string
    magnesium?: string
    magnesium_100g?: string
    magnesium_label?: string
    magnesium_serving?: string
    magnesium_unit?: string
    magnesium_value?: number
    phosphorus?: string
    phosphorus_100g?: string
    phosphorus_label?: string
    phosphorus_serving?: string
    phosphorus_unit?: string
    phosphorus_value?: number
    zinc?: string
    zinc_100g?: string
    zinc_label?: string
    zinc_serving?: string
    zinc_unit?: string
    zinc_value?: string
  }
  
  export interface Nutriscore {
    "2021": N2021
    "2023": N2023
  }
  
  export interface N2021 {
    category_available: number
    data: Data
    grade: string
    nutrients_available: number
    nutriscore_applicable: number
    nutriscore_computed: number
    score: number
  }
  
  export interface Data {
    energy: number
    energy_points: number
    energy_value: number
    fiber: number
    fiber_points: number
    fiber_value: number
    fruits_vegetables_nuts_colza_walnut_olive_oils: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
    is_beverage: number
    is_cheese: number
    is_fat: number
    is_water: number
    negative_points: number
    positive_points: number
    proteins: number
    proteins_points: number
    proteins_value: number
    saturated_fat: string
    saturated_fat_points: number
    saturated_fat_value: string
    sodium: number
    sodium_points: number
    sodium_value: number
    sugars: string
    sugars_points: number
    sugars_value: string
  }
  
  export interface N2023 {
    category_available: number
    data: Data2
    grade: string
    nutrients_available: number
    nutriscore_applicable: number
    nutriscore_computed: number
    score: number
  }
  
  export interface Data2 {
    components: Components
    count_proteins: number
    count_proteins_reason: string
    is_beverage: number
    is_cheese: number
    is_fat_oil_nuts_seeds: number
    is_red_meat_product: number
    is_water: number
    negative_points: number
    negative_points_max: number
    positive_nutrients: string[]
    positive_points: number
    positive_points_max: number
  }
  
  export interface Components {
    negative: Negative[]
    positive: Positive[]
  }
  
  export interface Negative {
    id: string
    points: number
    points_max: number
    unit: string
    value: any
  }
  
  export interface Positive {
    id: string
    points: number
    points_max: number
    unit: string
    value: number
  }
  
  export interface NutriscoreData {
    energy: number
    energy_points: number
    energy_value: number
    fiber: number
    fiber_points: number
    fiber_value: number
    fruits_vegetables_nuts_colza_walnut_olive_oils: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
    grade: string
    is_beverage: number
    is_cheese: number
    is_fat: number
    is_water: number
    negative_points: number
    positive_points: number
    proteins: number
    proteins_points: number
    proteins_value: number
    saturated_fat: string
    saturated_fat_points: number
    saturated_fat_value: string
    score: number
    sodium: number
    sodium_points: number
    sodium_value: number
    sugars: string
    sugars_points: number
    sugars_value: string
  }
  
  export interface OwnerFields {
    abbreviated_product_name?: number
    abbreviated_product_name_fr: number
    allergens: number
    brands: number
    carbohydrates: number
    categories: number
    conservation_conditions_fr: number
    countries: number
    customer_service_fr: number
    data_sources: number
    energy: number
    "energy-kcal": number
    "energy-kj": number
    fat: number
    fiber: number
    "fruits-vegetables-nuts": number
    generic_name_fr: number
    ingredients_text_fr: number
    lang: number
    lc: number
    no_nutrition_data?: number
    nutrition_data_per: number
    nutrition_data_prepared_per: number
    obsolete: number
    owner: number
    packaging: number
    preparation_fr: number
    producer_version_id: number
    product_name_fr: number
    proteins: number
    quantity: number
    salt: number
    "saturated-fat": number
    serving_size: number
    sodium?: number
    sugars: number
    traces: number
    iron?: number
    magnesium?: number
    phosphorus?: number
    zinc?: number
  }
  
  export interface Packaging3 {
    material?: string
    number_of_units?: number
    quantity_per_unit?: string
    quantity_per_unit_unit?: string
    quantity_per_unit_value?: number
    recycling?: string
    shape: string
    weight_measured?: string
  }
  
  export interface PackagingsMaterials {
    all: All
    "en:paper-or-cardboard": EnPaperOrCardboard
    "en:unknown": EnUnknown
  }
  
  export interface All {
    weight?: string
    weight_100g?: string
    weight_percent?: number
  }
  
  export interface EnPaperOrCardboard {
    weight?: string
    weight_100g?: string
    weight_percent?: number
  }
  
  export interface EnUnknown {}
  
  export interface Scores2 {}
  
  export interface SelectedImages {
    front: Front2
  }
  
  export interface Front2 {
    display: Display
    small: Small
    thumb: Thumb
  }
  
  export interface Display {
    bg?: string
    de: string
    en: string
    es: string
    fr: string
    it: string
    ru?: string
    sr?: string
    da?: string
    fi?: string
    hu?: string
    nl?: string
    no?: string
    sv?: string
  }
  
  export interface Small {
    bg?: string
    de: string
    en: string
    es: string
    fr: string
    it: string
    ru?: string
    sr?: string
    da?: string
    fi?: string
    hu?: string
    nl?: string
    no?: string
    sv?: string
  }
  
  export interface Thumb {
    bg?: string
    de: string
    en: string
    es: string
    fr: string
    it: string
    ru?: string
    sr?: string
    da?: string
    fi?: string
    hu?: string
    nl?: string
    no?: string
    sv?: string
  }
  
  export interface Source {
    fields: string[]
    id: string
    images: string[]
    import_t: number
    url?: string
    manufacturer: any
    name?: string
    source_licence?: string
    source_licence_url?: string
  }
  
  export interface SourcesFields {
    "org-gs1": OrgGs1
  }
  
  export interface OrgGs1 {
    gln: string
    gpcCategoryCode: string
    gpcCategoryName: string
    isAllergenRelevantDataProvided: string
    lastChangeDateTime: string
    partyName: string
    productionVariantDescription: string
    publicationDateTime: string
  }
  
  export interface NutrimentsEstimated {
    alcohol_100g: number
    "beta-carotene_100g": number
    calcium_100g: string
    carbohydrates_100g: string
    cholesterol_100g: number
    copper_100g: string
    "energy-kcal_100g": number
    "energy-kj_100g": number
    energy_100g: number
    fat_100g: string
    fiber_100g: string
    fructose_100g: number
    galactose_100g: number
    glucose_100g: number
    iodine_100g: number
    iron_100g: string
    lactose_100g: number
    magnesium_100g: string
    maltose_100g: number
    manganese_100g: string
    "pantothenic-acid_100g": number
    phosphorus_100g: string
    phylloquinone_100g: number
    polyols_100g: number
    potassium_100g: string
    proteins_100g: string
    salt_100g: string
    "saturated-fat_100g": number
    selenium_100g: number
    sodium_100g: string
    starch_100g: number
    sucrose_100g: number
    sugars_100g: number
    "vitamin-a_100g": number
    "vitamin-b12_100g": number
    "vitamin-b1_100g": number
    "vitamin-b2_100g": number
    "vitamin-b6_100g": string
    "vitamin-b9_100g": number
    "vitamin-c_100g": number
    "vitamin-d_100g": number
    "vitamin-e_100g": string
    "vitamin-pp_100g": number
    water_100g: string
    zinc_100g: string
  }
  