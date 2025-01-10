import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import debounce from 'lodash.debounce';
import { bool } from 'prop-types';

const AddressInputForm = () => {
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');

    const [cityData, setCityData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [wardData, setWardData] = useState([]);

    const [filteredCities, setFilteredCities] = useState([]);
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const [filteredWards, setFilteredWards] = useState([]);

    const [loadingCities, setLoadingCities] = useState(false);
    const [loadingDistricts, setLoadingDistricts] = useState(false);
    const [loadingWards, setLoadingWards] = useState(false);
    const [error, setError] = useState(null);

    const fetchProvinces = useCallback(async () => {
        setLoadingCities(true);
        try {
          const response = await fetch('https://provinces.open-api.vn/api/p/');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setCityData(data.map(p => ({ code: p.code, name: p.name })));
          setError(null);
        } catch (error) {
          console.error("Error fetching provinces:", error);
          setError("Không thể lấy dữ liệu tỉnh/thành phố.");
          Alert.alert("Lỗi", "Không thể lấy dữ liệu tỉnh/thành phố. Vui lòng kiểm tra kết nối internet.");
        } finally {
          setLoadingCities(false);
        }
      }, []);
    
      const fetchDistricts = useCallback(async (provinceCode) => {
        setLoadingDistricts(true);
        try {
          const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setDistrictData(data.districts.map(d => ({ code: d.code, name: d.name })));
          setError(null);
        } catch (error) {
          console.error("Error fetching districts:", error);
          setError("Không thể lấy dữ liệu quận/huyện.");
          Alert.alert("Lỗi", "Không thể lấy dữ liệu quận/huyện. Vui lòng kiểm tra kết nối internet.");
        } finally {
          setLoadingDistricts(false);
        }
      }, []);
    
      const fetchWards = useCallback(async (districtCode) => {
        setLoadingWards(true);
        try {
          const response = await fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setWardData(data.wards.map(w => ({ code: w.code, name: w.name })));
          setError(null);
        } catch (error) {
          console.error("Error fetching wards:", error);
          setError("Không thể lấy dữ liệu phường/xã.");
          Alert.alert("Lỗi", "Không thể lấy dữ liệu phường/x xã. Vui lòng kiểm tra kết nối internet.");
        } finally {
          setLoadingWards(false);
        }
      }, []);
    
      useEffect(() => {
        fetchProvinces();
      }, [fetchProvinces]);

    useEffect(() => {
        if (city) {
            const selectedCity = cityData.find(c => c.name === city);
            if (selectedCity) {
                fetchDistricts(selectedCity.code);
            }
        } else {
            setDistrict('');
            setDistrictData([]);
            setFilteredDistricts([]);
            setWard('');
            setWardData([]);
            setFilteredWards([]);
        }
    }, [city, fetchDistricts, cityData]);

    useEffect(() => {
        if (district) {
            const selectedDistrict = districtData.find(d => d.name === district);
            if (selectedDistrict) {
                fetchWards(selectedDistrict.code);
            }
        } else {
            setWard('');
            setWardData([]);
            setFilteredWards([]);
        }
    }, [district, fetchWards, districtData]);

    const filterData = (text, data, setFiltered) => {
        if (text) {
            setFiltered(data.filter(item => item.name.toLowerCase().includes(text.toLowerCase())));
        } else {
            setFiltered([]);
        }
    };

    const debouncedFilterData = useCallback(debounce(filterData, 300), []);


    const handleSelectItem = (item, setter, setFiltered) => {
        setter(item);
        setFiltered([]);
    };

    const renderAutocomplete = (value, setValue, filteredData, placeholder, setFiltered, loading) => (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={(text) => {
                    setValue(text);
                    debouncedFilterData(text, (placeholder === 'Chọn tỉnh, thành phố' ? cityData : placeholder === 'Chọn quận, huyện, thị xã' ? districtData : wardData), setFiltered);
                }}
            />
            {loading && <ActivityIndicator style={styles.loadingIndicator} />}
            {filteredData.length > 0 && (
                <FlatList
                    style={styles.suggestions}
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectItem(item.name, setValue, setFiltered)}>
                            <Text style={styles.suggestionItem}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {renderAutocomplete(city, setCity, filteredCities, 'Chọn tỉnh, thành phố', setFilteredCities, loadingCities)}
            {renderAutocomplete(district, setDistrict, filteredDistricts, 'Chọn quận, huyện, thị xã', setFilteredDistricts, loadingDistricts)}
            {renderAutocomplete(ward, setWard, filteredWards, 'Chọn phường, xã, thị trấn', setFilteredWards, loadingWards)}
            <TextInput
                style={styles.input}
                placeholder="Số nhà"
                value={houseNumber}
                onChangeText={setHouseNumber}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        borderRadius: 15,
    },
    input: {
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 8,
        borderRadius: 15,
        
    },
    suggestions: {
        marginTop: 4,
        borderColor: 'lightgray',
        borderWidth: 1,
        maxHeight: 200,
        backgroundColor: 'white', // Đảm bảo background không bị trong suốt
        borderRadius: 15,
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        color: "gray",
    },
    loadingIndicator: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    }
});

export default AddressInputForm;